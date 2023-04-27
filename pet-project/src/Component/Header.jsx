import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navbar, NavLink, Nav, Container, Button } from "react-bootstrap";
import News from '../Pages/News'
import Messages from '../Pages/Messages'
import Home from './../Pages/Home'
import Search from '../Pages/Search';
import Liberies from '../Pages/Liberies';
import SignIn from '../Pages/SignIn';
import Login from '../Pages/Login';

export default function Header() {
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
                            <Nav>
                                <NavLink as={Link} to="/sign_in">
                                    <Button variant="outline-warning">Sign In</Button>
                                </NavLink>
                                <NavLink as={Link} to="/login">
                                    <Button variant="outline-warning">Login</Button>
                                </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/liberies" element={<Liberies />} />
                    <Route exact path="/messages" element={<Messages />} />
                    <Route exact path="/news" element={<News />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route exact path="/sign_in" element={<SignIn />} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    )
}
