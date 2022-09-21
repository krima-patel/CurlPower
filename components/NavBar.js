/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Nav,
  Container,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand><img src="/./images/CurlPowerLogo.png" alt="Curl Power Logo" width="65" height="80" /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link passHref href="/">
              <Nav.Link>Hair Type Information</Nav.Link>
            </Link>
          </Nav>
          <Nav className="me-auto">
            <Link passHref href="/routines">
              <Nav.Link>Routine Collection</Nav.Link>
            </Link>
          </Nav>
          <Nav className="me-auto">
            <Link passHref href="/products">
              <Nav.Link>Product Collection</Nav.Link>
            </Link>
          </Nav>
          <NavDropdown title={<img className="cp-icon" src="/favicon.ico" alt="curl power icon" style={{ width: '50%' }} />} className="nav-dropdown">
            <Link passHref href="/">
              <NavDropdown.Item>
                Hair Type Information
              </NavDropdown.Item>
            </Link>
            <Link passHref href="/routines">
              <NavDropdown.Item>
                Routine Collection
              </NavDropdown.Item>
            </Link>
            <Link passHref href="/products">
              <NavDropdown.Item>
                Product Collection
              </NavDropdown.Item>
            </Link>
            <Link passHref href="/routine/new">
              <NavDropdown.Item>
                Share Routine
              </NavDropdown.Item>
            </Link>
            <Link passHref href="/product/new">
              <NavDropdown.Item>
                Submit Product
              </NavDropdown.Item>
            </Link>
            <NavDropdown.Item>
              <button type="button" className="btn btn-sign-out" onClick={signOut}>
                Sign Out
              </button>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
