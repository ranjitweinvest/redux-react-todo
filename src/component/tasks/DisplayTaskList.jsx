import React, { Component, Fragment } from 'react'

export default class DisplayTaskList extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <Fragment>
           <th scope="row">{this.props.task.id}</th>
           <td>{this.props.task.name}</td>
           <td>{this.props.task.estimation}</td>
           <td>{this.props.task.company}</td>
           <td><button onClick={() => { this.props.deleteTask(this.props.task.id) }}>Delete Task</button></td>
           <td><button onClick={() => { this.props.editTask(this.props.task)}}>Edit Task</button></td>
         </Fragment>
    )
  }
}