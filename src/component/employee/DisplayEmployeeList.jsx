import React, { Component, Fragment } from 'react'

export default class DisplayEmployeeList extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let {tasks} = this.props
    tasks = (tasks && tasks.data) ? tasks.data : [];
    let ename = this.props.employee.name;
    let p = this.props.tasks.data;
    let filteredData = p.map((emp) => { return emp.employeeTask == ename  ? emp.name : '' });
    
    return (
        <Fragment>
           <th scope="row">{this.props.employee.id}</th>
           <td>{this.props.employee.name}</td>
           <td>{this.props.employee.age}</td>
           <td>{this.props.employee.designation}</td>
           <td>{filteredData}</td>
           <td><button onClick={() => { this.props.deleteEmployee(this.props.employee.id) }}>Delete Employee</button></td>
           <td><button onClick={() => { this.props.editEmployee(this.props.employee) }}>Edit Employee</button></td>
         </Fragment>
    )
  }
}
//
