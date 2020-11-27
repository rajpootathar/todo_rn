import initialState from './model';
import types from './types';

export default (state = initialState, action) => {
  const {type, data} = action;
  const {activeTasks, completedTasks} = state;
  switch (type) {
    case types.CREATE_TASK:
      return {...state, activeTasks: [data, ...activeTasks]};
    case types.DELETE_ACTIVE_TASK:
      return {
        ...state,
        activeTasks: activeTasks.filter((todo, index) => data !== index),
      };
    case types.DELETE_COMPLETED_TASK:
      return {
        ...state,
        completedTasks: completedTasks.filter((todo, index) => data !== index),
      };

    case types.COMPLETE_TASK:
      let completedTask;
      let newActiveTasks = activeTasks.filter((task, index) => {
        if (index === data) {
          completedTask = task;
        } else {
          return task;
        }
      });
      return {
        ...state,
        activeTasks: newActiveTasks,
        completedTasks: [completedTask, ...completedTasks],
      };
    default:
      return state;
  }
};
