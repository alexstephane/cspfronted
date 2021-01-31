


import React, {Component} from "react"
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';


export class Navigation extends Component {

    render(){
        return(
        <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav>

                <NavLink className="d-inline p-2 db-dark text-white"
                to="/">Login</NavLink>

                <NavLink className="d-inline p-2 db-dark text-white"
                to="/user">User</NavLink>

                <NavLink className="d-inline p-2 db-dark text-white"
                to="/department">Department</NavLink>

                <NavLink className="d-inline p-2 db-dark text-white"
                to="/event">Event</NavLink>


            </Nav>

        </Navbar.Collapse>
        </Navbar>
        )
    }

}

export default Navigation;





