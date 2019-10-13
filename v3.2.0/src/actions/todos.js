import axios from 'common/helpers/axios';
import { API_TODOS } from 'common/constants/api';
import TYPES from 'common/constants/actionTypes';
import { actionCallAPI } from 'common/helpers/action';

const todosActions = {
  get: () => (dispatch) => {
    const actionName = TYPES.TODOS.GET;
    const asyncAction = axios.GET(API_TODOS);
  
    const actions = {
      success: async (response) => {
        if (response.status === 200) {
          const responseData = response.data || [];
          return {
            todos: responseData,
            totalTodos: responseData.length,
          };
        }
        return null;
      },
      error: (response) => {
        return response.data.error || `${response.status}`;
      }
    };
  
    return dispatch(actionCallAPI(actionName, asyncAction, actions));
  }
}

export default todosActions;