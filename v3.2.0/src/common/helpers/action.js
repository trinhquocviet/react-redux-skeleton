import {
  isObject,
  isEmpty,
  indexOf,
} from 'lodash';
import { ACTION_KEYS } from 'common/constants/actionTypes';

const FUNC_PARAMS_ERROR = {
  MISSING_ACTION:       '@actions should be object',
  MISSING_FUNC_SUCCESS: '@actions missing key `success`, `success` should be a function will call when asyncAction success',
  ACTION_NAME_MISMATCH: 'ACTION_NAME is mismatch, please check common/constants/actionTypes.js',
}

/**
 * actionCallAPI will make a call to API and map response data into result and return.
 * @param   {string}          ACTION_NAME - The string is the name of action.
 * @param   {async function}  asyncAction - An async action often is Axios or Promise function.
 * @param   {object}          actions     - An Object contain key at least 1 key is { success } and should be a function or { action, error }.
 * @return  {object}                      - The object contain { type, payload }.
 */
export const actionCallAPI = (ACTION_NAME, asyncAction, actions) => async (dispatch) => {
  let isAllowed = true;
  // 
  if (!isEmpty(actions) && !isObject(actions)) {
    isAllowed = false;
    console.error(FUNC_PARAMS_ERROR.MISSING_ACTION);
  } else if (isObject(actions) && !actions.success) {
    isAllowed = false;
    console.error(FUNC_PARAMS_ERROR.MISSING_FUNC_SUCCESS);
  } else if (indexOf(ACTION_KEYS, ACTION_NAME) < 0) {
    isAllowed = false;
    console.error(FUNC_PARAMS_ERROR.ACTION_NAME_MISMATCH);
  }
  // 
  if (isAllowed) {
    dispatch({type: `${ACTION_NAME}_STARTED`});
    try {
      return await asyncAction.then(async (response) => {
        const result = actions.success ? await actions.success(response) : response.data;
        if (response.data.error || !result) {
          throw actions.error ? await actions.error(response) : response.data.error;
        } else {
          const payload = result;
          dispatch({
            type: `${ACTION_NAME}_SUCCESS`,
            payload,
          });

          return payload;
        }
      })
      .catch(error => {
        console.log(error);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        throw error;
      });
    } catch (error) {
      dispatch({
        type: `${ACTION_NAME}_FAILURE`,
        payload: error.message || error,
      });

      return null;
    }
  }
};