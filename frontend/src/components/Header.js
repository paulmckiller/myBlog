import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Form, FormControl, Button, Col, Row } from 'react-bootstrap';
const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="navbar navbar-expand-lg navbar-light bg-light border-0">
                <LinkContainer to="/">
                    <Navbar.Brand className="ml-3"><h3>myBlog</h3></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <LinkContainer to="/profile">
                                <Nav.Link className="mr-2"><i className="far fa-user-circle"></i> Profile</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/mycontent">
                                <Nav.Link className="mr-2"><i className="fab fa-blogger"></i> My Content</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/newblog">
                                <Nav.Link className="mr-2"><i className="far fa-plus-square"></i> Add New Blog</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                    <Nav className="mr">
                        <Nav.Item>
                            <Form inline className="">
                                <FormControl type="text" placeholder=". . ." className="mr-sm-md-lg-2" />
                                <Button variant="outline-success"><i className="fas fa-search"></i></Button>
                            </Form>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/signin">
                                <Nav.Link className="mr-2"><i className="fas fa-sign-in-alt"></i> Login</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
