import { combineReducers } from 'redux';
import tasks from './tasks';
import employee from './employee';

const employeeApp = combineReducers({
 tasks,
 employee
});

export default employeeApp;