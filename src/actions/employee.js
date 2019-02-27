const addEmployeeAction = dispatch => ({
    updateEmployee: (employee) => {
        employee.id = Date.now() % 1000;
        dispatch({
            type: 'NEW_EMPLOYEE',
            payload: { employee },
        })
    },
    deleteEmployee: (employee) => {
        dispatch({
            type: 'DELETE_EMPLOYEE',
            payload: { employee }
        })
    },
    editEmployee: (id) => {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: { id }
        })
    },
    saveEmployee: (employee) => {
        dispatch({
            type: 'SAVE_EMPLOYEE',
            payload: { employee }
        })
    },
    filterEmployee: (e) => {
        dispatch({
            type: 'SORT_EMPLOYEE',
            payload: { e }
        })
    }
});

export default addEmployeeAction;