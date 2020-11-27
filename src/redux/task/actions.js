import types from './types';

export default {
  createTask: text => {
    return {type: types.CREATE_TASK, data: {task: text}};
  },
  deleteActiveTask: index => {
    return {type: types.DELETE_ACTIVE_TASK, data: index};
  },
  deleteCompletedTask: index => {
    return {type: types.DELETE_COMPLETED_TASK, data: index};
  },
  completeTask: index => {
    return {type: types.COMPLETE_TASK, data: index};
  },
};
