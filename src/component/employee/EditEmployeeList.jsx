import React, { Component, Fragment } from 'react'

export default class EditEmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.employee.id,
            name: this.props.employee.name,
            age: this.props.employee.age,
            designation: this.props.employee.designation
				};
				this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
			this.setState({
				[e.target.id]: e.target.value
				})
		}
		handleSubmit = (e) => {
			this.props.saveEmployee(this.state);
			this.setState({
				name: "",
				age: "",
				designation: "",
				id: ""
			});
		}
    render() {
				let {name , age, designation } = this.state

        return (
            <Fragment>
                <th scope="row">{this.state.id}</th>
                <td><input type="text" id="name" value={name} onChange={this.handleChange} /></td>
                <td><input type="text" id="age" value={age} onChange={this.handleChange} /></td>
                <td><input type="text" id="designation" value={designation} onChange={this.handleChange} /></td>
                <td><button disabled> Delete Employee</button></td>
                <td><button onClick={this.handleSubmit}>Save</button></td>
            </Fragment>
        )
    }
}