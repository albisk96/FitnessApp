import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Modal from '../modal/modal.component';
import Login from '../login-register/login.component';
import AddUser from '../users-table/add-user.component';
import LinkNav from '../links/link-nav.component';
import { useAuth } from '../../contexts'

const NavBar = () => {
    const { session, removeSession } = useAuth();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true)
    };

    const CoachLinks = (
        <Nav className="mr-auto">
            <LinkNav to='/profile/create'>Profile</LinkNav>
            <Nav.Link href="#link">Calendar</Nav.Link>
            <LinkNav to='/workouts'>My Workouts</LinkNav>
            <button className="btn btn-outline-danger my-2 my-sm-0" onClick={removeSession} type="submit">Logout</button>
        </Nav>
    )
    const AdminLinks = (
        <Nav className="mr-auto">
            <button className="btn btn-outline-danger my-2 my-sm-0" onClick={removeSession} type="submit">Logout</button>
        </Nav>
    )

    const UserLinks = (
        <Nav className="mr-auto">
            <LinkNav to='/profile/create'>Profile</LinkNav>
            <Nav.Link href="#link">Dashboard</Nav.Link>
            <LinkNav to='/workouts'>Workouts</LinkNav>
            <Nav.Link href="#link">Shop</Nav.Link>
            <button className="btn btn-outline-danger my-2 my-sm-0 mr-3" onClick={removeSession} type="submit">Logout</button>
        </Nav>
    )

    const GuestLinks = (
        <Nav className="mr-auto">
            <AddUser className="btn btn-outline-danger my-2 my-sm-0 mr-3" modalTitle="Register" buttonName="Register" />
            <button className="btn btn-outline-success my-2 my-sm-0 mr-3" onClick={(e) => handleShow(e)}>Login</button>
        </Nav>
    )

    return(
    <div>
    <Navbar collapseOnSelect style={{ height: '20%', zIndex: '999'}} expand="lg" bg="dark" variant="dark">
    <div className="container">
        <Navbar.Brand href="#home">Fitness App</Navbar.Brand>
        <Navbar.Toggle style={{ zIndex: '999'}}  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"/>
            <Nav>
            { 
            session && session.role === 'coach' ? CoachLinks 
            : session && session.role === 'user' ? UserLinks
            : session && session.role === 'admin' ? AdminLinks
            : GuestLinks
            }
            </Nav>
        </Navbar.Collapse>
    </div>
    </Navbar>
    <Modal show={show} handleClose={handleClose} title="Please login" component={<Login />} />
    </div>
)}
export default NavBar;

