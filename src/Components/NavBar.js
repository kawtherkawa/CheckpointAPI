import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/listuser">Users</Nav.Link>
            <Nav.Link href="/admin">Admin Inteface</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar