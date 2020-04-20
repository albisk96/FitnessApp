import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Modal from '../modal/modal.component';
import Login from '../login-register/login.component';
import AddUser from '../users-table/add-user.component';
import LinkNav from '../links/link-nav.component';
import { useAuth } from '../../contexts'

const NavBar = () => {
    const { session, removeSession } = useAuth();
    const [modalShow, setModalShow] = useState(false);


    const CoachLinks = (
        <Nav className="mr-auto">
            <LinkNav to='/profile'>Profile</LinkNav>
            <LinkNav to='/coach'>Coaches</LinkNav>
            <LinkNav to='/workouts'>Workouts</LinkNav>
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
            <LinkNav to='/dashboard'>Dashboard</LinkNav>
            <Nav.Link href="/coach">Coaches</Nav.Link>
            <LinkNav to='/workouts'>Workouts</LinkNav>
            <LinkNav to='/plan'>Workout Plan</LinkNav>
            <button className="btn btn-outline-danger my-2 my-sm-0 mr-3" onClick={removeSession} type="submit">Logout</button>
        </Nav>
    )

    const GuestLinks = (
        <Nav className="mr-auto">
            <AddUser className="btn btn-outline-danger my-2 my-sm-0 mr-3" modalTitle="Create Account" buttonName="Register" />
            <button className="btn btn-outline-success my-2 my-sm-0 mr-3" onClick={() => setModalShow(true)}>Login</button>
        </Nav>
    )

    return(
    <div>
    
    <Navbar collapseOnSelect 
    style={{ height: '20%', background: !session ? '#000' : '#0f0f0f'}} expand="lg" variant="dark" sticky="top">
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
    <Modal show={modalShow} size="modal-50w" onHide={() => setModalShow(false)} title="Please login" component={<Login />} />
    </div>
)}
export default NavBar;

