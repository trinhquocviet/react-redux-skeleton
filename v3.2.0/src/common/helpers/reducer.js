/**
 * getReducerData will get data from action.
 * @param   {object} state      - The default state.
 * @param   {object} action     - The object with 2 keys are { type, payload }.
 * @param   {string} actionType - The string defines the type of action.
 * @param   {object} keys       - The object contains at least 2 keys are { loading, error } to map loading and error.
 * @return  {object}            - The object is the reducer data.
 */
export const getReducerData = (state, action, actionType, keys = {}) => {
  switch (action.type) {
    case `${actionType}_STARTED`:
      return {
        ...state,
        [keys.loading]: true,
      };
    case `${actionType}_SUCCESS`:
      return {
        ...state,
        ...action.payload,
        [keys.loading]: false,
      };
    case `${actionType}_FAILURE`:
      return {
        ...state,
        [keys.loading]: false,
        [keys.error]: action.payload,
      };
    default:
      return state;
  }
};

/**
 * removeTypeState will get type without state.
 * @param {string} type The string include state is one of STARTED | SUCCESS | FAILURE.
 * @return {string} The string without state.
 */
export const removeTypeState = (type = '') => {
  const regex = /_STARTED|_SUCCESS|_FAILURE/gi;
  return type.replace(regex, '');
}