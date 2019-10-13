import { values } from 'lodash';
import { flatten } from 'common/helpers/object';

const TYPES = {
  TODOS: {
    GET: 'TODOS_GET',
  },
}

export default TYPES;
export const ACTION_KEYS = values(flatten(TYPES));
