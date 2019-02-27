import initialData from '../initialData/initialData'

let initialState = {
  sort_by: '',
  data: initialData.task
};

const tasks = (state = initialState, action) => {
  switch (action.type ) {
    case 'NEW_TASK':
      let data = state.data.concat(action.payload.task) 
      return {
        sort_by: "",
        data: data,
      }
      break;
    case 'DELETE_TASK':
      let filterTask = state.data.filter((filtered_task) => {
        return filtered_task.id !== action.payload.task
      });
      return {
        sort_by: "",
        data: filterTask,
      }
      break;
    case 'EDIT_TASK':
      let editTask = state.data.map((task) => {
        if (task.id == action.payload.id) {
          return {
            ...task,
            edit: true
          }
        } else {
          return task
        }
      });
      return {
        sort_by: "",
        data: editTask
      }
      break;
    case 'SAVE_TASK':
      let saveTask = state.data.map((tmp) => {
        if (tmp.id == action.payload.task.id) {
          return {
            ...action.payload.task,
            edit: false
          }
        } else {
          return tmp
        }
      });
      return {
        sort_by: "",
        data: saveTask
      }
      break;
    case 'SORT_TASK':
      return {
        sort_by: action.payload.e,
        data: state.data
      };
      break;
   default:
       return state;
      break;
  }
};
export default tasks