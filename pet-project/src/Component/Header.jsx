import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navbar, NavLink, Nav, Container, Button, Modal, Form, Row, Col } from "react-bootstrap";
import News from '../Pages/News'
import Messages from '../Pages/Messages'
import Home from './../Pages/Home'
import Search from '../Pages/Search';
import Liberies from '../Pages/Liberies';
import SignIn from '../Pages/SignIn';
import Login from '../Pages/Login';

export default function Header() {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [showModalRegister, setShowModalRegister] = useState(false);

    const handleCloseRegister = () => setShowModalRegister(false);
    const handleShowRegister = () => setShowModalRegister(true);

    return (
        <>
            <Router>
                <Navbar
                    collapseOnSelect
                    expand="md"
                    bg="light"
                    variant="light"
                    sticky="top"
                >
                    <Container>
                        <Navbar.Brand href="/" className='mx-4'>
                            <div>LoGo</div>{" "}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink as={Link} to="/">
                                    Profile
                                </NavLink>
                                <NavLink as={Link} to="/liberies">
                                    Liberies
                                </NavLink>
                                <NavLink as={Link} to="/messages">
                                    Messages
                                </NavLink>
                                <NavLink as={Link} to="/news">
                                    News
                                </NavLink>
                                <NavLink as={Link} to="/search">
                                    Search
                                </NavLink>
                            </Nav>
                            <Button className='m-2' variant="outline-warning" onClick={handleShowRegister}>Sign In</Button>
                            <Button className='m-2' variant="outline-warning" onClick={handleShow}>Login</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/liberies" element={<Liberies />} />
                    <Route exact path="/messages" element={<Messages />} />
                    <Route exact path="/news" element={<News />} />
                    <Route exact path="/search" element={<Search />} />
                </Routes>
            </Router>
            <Login showModal={showModal} handleClose={handleClose} />
            <SignIn showModalRegister={showModalRegister} handleCloseRegister={handleCloseRegister} />

        </>
    )
}
