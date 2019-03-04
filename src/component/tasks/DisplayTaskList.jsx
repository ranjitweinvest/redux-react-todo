import React, { Component, Fragment } from 'react'
import {Link ,NavLink } from 'react-router-dom'
import { LinkContainer} from 'react-router-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom';
import Employee from '../employee/Employee'

export default class DisplayTaskList extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let link_url = `/employee/details/${this.props.task.id}`;
    return (
        <Fragment>
            <th scope="row">{this.props.task.id}</th>
            <td><Link to={link_url} render={(props) => <Employee{...props} /> } >{this.props.task.name}</Link></td>
            <td>{this.props.task.estimation}</td>
            <td>{this.props.task.company}</td>
            <td>{this.props.task.employeeTask}</td>
            <td><button onClick={() => { this.props.deleteTask(this.props.task.id) }}>Delete Task</button></td>
            <td><button onClick={() => { this.props.editTask(this.props.task)}}>Edit Task</button></td>
         </Fragment>
    )
  }
}