import React, { Component } from 'react'
import DisplayEmployeeList from './DisplayEmployeeList'
import EditEmployeeList from './EditEmployeeList'

class employeeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { employee } = this.props;
    employee = (employee && employee.length) ? employee : [];
    return (
      <div className="employeeListDisplay">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee, key) => {
              let tr;
              if (!employee.edit) {
                tr = (
                  <DisplayEmployeeList 
                    employee={employee} 
                    deleteEmployee={this.props.deleteEmployee}
                    editEmployee={this.props.editEmployee} />
                )
              }
              else {
              tr =  (
                  <EditEmployeeList 
                    saveEmployee={this.props.saveEmployee}
                    employee={employee}  />
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
