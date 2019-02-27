import React, { Component } from 'react'
import {Link ,NavLink } from 'react-router-dom'
import './css/navbar.css'
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap'

export default class NavLinks extends Component {
  render() {
    
    return (
      <div className="Navbar">
      <Nav variant="pills" >
         <LinkContainer to='/employee'>
           <NavItem className="nav-link">Employee</NavItem>
         </LinkContainer>
         <LinkContainer to='/task'>
           <NavItem className="nav-link">Task</NavItem>
         </LinkContainer>
       </Nav>
      </div>
    )
  }
}
