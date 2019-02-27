import React, { Component, Fragment } from 'react'

export default class EditEmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.task.id,
            name: this.props.task.name,
            estimation: this.props.task.estimation,
            company: this.props.task.company
				};
				this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
			this.setState({
				[e.target.id]: e.target.value
				})
		}
		handleSubmit = (e) => {
			this.props.saveTask(this.state);
			this.setState({
				name: "",
				estimation: "",
				company: "",
				id: ""
			});
		}
    render() {
				let {name , estimation, company } = this.state

        return (
            <Fragment>
                <th scope="row">{this.state.id}</th>
                <td><input type="text" id="name" value={name} onChange={this.handleChange} /></td>
                <td><input type="text" id="estimation" value={estimation} onChange={this.handleChange} /></td>
                <td><input type="text" id="company" value={company} onChange={this.handleChange} /></td>
                <td><button disabled> Delete Employee</button></td>
                <td><button onClick={this.handleSubmit}>Save</button></td>
            </Fragment>
        )
    }
}