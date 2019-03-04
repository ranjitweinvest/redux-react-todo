import React, { Component } from 'react'
import DisplayTaskList from './DisplayTaskList'
import EditTaskList from './EditTaskList'

class employeeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { task } = this.props;
    task = (task && task.length) ? task : [];
    return (
      <div className="employeeListDisplay">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Task Name</th>
              <th>Estimation</th>
              <th>Company</th>
              <th>Employee ID Assigned To</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {task.map((task, key) => {
              let tr;
              if (!task.edit) {
                tr = (
                  <DisplayTaskList 
                    task={task} 
                    deleteTask={this.props.deleteTask}
                    editTask={this.props.editTask} />
                )
              }
              else {
              tr =  (
                  <EditTaskList 
                    saveTask={this.props.saveTask}
                    task={task}  />
                   )
              }
              return (<tr key={key}>{tr}</tr>)
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default employeeList
