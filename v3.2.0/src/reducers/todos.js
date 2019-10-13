import TYPES from 'common/constants/actionTypes';
import { getReducerData, removeTypeState } from 'common/helpers/reducer';

const INITIAL_STATE = {
  todos:           [],
  totalTodos:      0,

  isGettingTodos:  false,
  getTodosError:   '',
};

export default (state = INITIAL_STATE, action) => {
  const { GET } = TYPES.TODOS;
  const type = removeTypeState(action.type);
  // 
  switch (type) {
    case GET:
      return getReducerData(state, action, GET, {
        loading: 'isGettingTodos',
        error: 'getTodosError',
      });
    default:
      return state;
  }
};
