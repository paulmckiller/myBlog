import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="md" bg="navbar navbar-expand-lg navbar-light bg-light border-0">
                <LinkContainer to="/">
                    <Navbar.Brand className="ml-3"><h3>myBlog</h3></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/profile">
                            <Nav.Link className="mr-2"><i className="far fa-user-circle"></i> Profile</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/content">
                            <Nav.Link className="mr-2"><i className="fab fa-blogger"></i> My Content</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder=". . ." className="mr-sm-md-2" />
                        <Button variant="outline-success"><i className="fas fa-search"></i> Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
