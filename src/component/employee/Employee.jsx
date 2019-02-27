import React, { Component } from 'react'
import EmployeeList from './EmployeeList.jsx'
import AddEmployee from './AddEmployee.jsx'
import { connect } from 'react-redux';
import addEmployeeAction from '../../actions/employee'
import "../css/employee.css"
import helloSelector from "../../selectors/helloSelector"

class employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: ""
    }
    this.editEmployee = this.editEmployee.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  addEmployee = (emp) => {
    this.props.updateEmployee(emp);
  }
  deleteEmployee = (id) => {
    this.props.deleteEmployee(id);
  }
  editEmployee({ id }) {
    this.props.editEmployee(id);
  }
  saveEmployee = (emp) => {
    this.props.saveEmployee(emp);
  }
  handleSortOnChange = (e) => {
    this.setState({ sortBy: e.target.value });
    this.props.filterEmployee(e.target.value);
  }
  render() {
    let { employee } = this.props;
    let { sortBy } = this.state;
    return (
      <div className="employee">
        <div>Sort By
        <select onChange={this.handleSortOnChange} selected={sortBy}>
            <option value="">-- sort by --</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="designation">Designation</option>
        </select>
        </div>
        <AddEmployee fields={['name', 'age', 'designation']}
                     compType={'Employee'}
                     addEmployee={this.addEmployee} />
        
        <EmployeeList employee={employee}
                      deleteEmployee={this.deleteEmployee}
                      editEmployee={this.editEmployee}
                      saveEmployee={this.saveEmployee} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => (addEmployeeAction(dispatch));
const mapStateToProps = (state) => ({ employee: helloSelector(state.employee) })
export default connect(mapStateToProps, mapDispatchToProps)(employee);
