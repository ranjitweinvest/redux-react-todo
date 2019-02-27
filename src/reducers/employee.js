import initialData from '../initialData/initialData'

let initialState = {
  sort_by: '',
  data: initialData.employee
};

const employee = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_EMPLOYEE':
      let pdata = state.data.concat(action.payload.employee)
      return {
        sort_by: "",
        data: pdata,
      }
      break;
    case 'DELETE_EMPLOYEE':
      let filterEmployee = state.data.filter((filtered_employee) => {
        return filtered_employee.id !== action.payload.employee
      });
      return {
        sort_by: "",
        data: filterEmployee,
      }
      break;
    case 'EDIT_EMPLOYEE':
      let editEmployee = state.data.map((emp) => {
        if (emp.id == action.payload.id) {
          return {
            ...emp,
            edit: true
          }
        } else {
          return emp
        }
      });
      return {
        sort_by: "",
        data: editEmployee
      }
      break;
    case 'SAVE_EMPLOYEE':
      let saveEmployee = state.data.map((emp) => {
        if (emp.id == action.payload.employee.id) {
          return {
            ...action.payload.employee,
            edit: false
          }
        } else {
          return emp
        }
      });
      return {
        sort_by: "",
        data: saveEmployee
      }
      break;
    case 'SORT_EMPLOYEE':
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
export default employee
