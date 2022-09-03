/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>CURL POWER</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link passHref href="/">
              <Nav.Link>Hair Type Information</Nav.Link>
            </Link>
            <Link passHref href="/routines">
              <Nav.Link>Routine Collection</Nav.Link>
            </Link>
            <Link passHref href="/routine/new">
              <Nav.Link>Share Routine</Nav.Link>
            </Link>
            <Link passHref href="/products">
              <Nav.Link>Product Collection</Nav.Link>
            </Link>
            <Link passHref href="/product/new">
              <Nav.Link>Submit Product</Nav.Link>
            </Link>
          </Nav>
          <button type="button" className="btn btn-sign-out" onClick={signOut}>
            Sign Out
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
