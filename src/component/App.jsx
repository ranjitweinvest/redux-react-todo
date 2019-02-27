import React, { Component } from 'react';
import Employee from './employee/Employee.jsx'
import { BrowserRouter, Route } from 'react-router-dom';
import Task from './tasks/Task'
import NavLinks from './NavLinks.jsx'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Route path='/' component={NavLinks} />
          <Route path='/employee' component={Employee} />
          <Route path='/task' component={Task} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;