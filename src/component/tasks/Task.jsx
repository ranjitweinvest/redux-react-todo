import React, { Component } from 'react'
import TaskList from './TaskList.jsx'
import AddTask from './AddTask.jsx'
import AddTaskAction  from '../../actions/task'
import {connect} from 'react-redux';
import helloSelector_task from "../../selectors/helloSelectorTask"

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: ""
    }
    this.editTask = this.editTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  addTask = (task) => {
    this.props.updateTask(task);
  }
  deleteTask = (id) => {
    this.props.deleteTask(id);
  }
  editTask({ id }) {
    this.props.editActionTask(id);
  }
  saveTask = (task) => {
    this.props.saveTask(task);
  }
  handleSortOnChange = (e) => {
    this.setState({ sortBy: e.target.value });
    this.props.filterTask(e.target.value);
  }
  render() {
    let { tasks, employee } = this.props;
    let { sortBy } = this.state;
    return (
      <div className="task">
        <div>Sort By
        <select onChange={this.handleSortOnChange} selected={sortBy}>
            <option value="">-- sort by --</option>
            <option value="name">Name</option>
            <option value="estimation">Estimation</option>
            <option value="company">Company</option>
          </select>
        </div>
        <AddTask addTask={this.addTask}
                 employee={employee}
                 fields={[
                   {name: 'name' , type: 'text'},
                   {name: 'estimation', type: 'number'},
                   {name: 'company', type: 'text'}
                  ]}
                 compType={'Task'} />

        <TaskList task={tasks} 
                  deleteTask={this.deleteTask}
                  editTask={this.editTask}
                  saveTask = {this.saveTask} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => (AddTaskAction(dispatch));
const mapStateToProps = (state) => ({ tasks: helloSelector_task(state.tasks), employee: state.employee })
export default connect(mapStateToProps, mapDispatchToProps)(Task);
