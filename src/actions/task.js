const addTaskAction = dispatch => ({
        updateTask: (task) => {
            task.id = Date.now() % 1000;
            dispatch({
              type: 'NEW_TASK',
              payload: { task },
            })
    },
        deleteTask: (task) => {
            dispatch({
                type: 'DELETE_TASK',
                payload: { task }
            })
        },
        editActionTask: (id) => {
          dispatch({
            type: 'EDIT_TASK',
            payload: { id }
          })
        },
        saveTask: (task) => {

          dispatch({
            type: 'SAVE_TASK',
            payload: {task}
          })
        },
        filterTask: (e) => {
          dispatch({
              type: 'SORT_TASK',
              payload: { e }
          })}
});

export default addTaskAction;
