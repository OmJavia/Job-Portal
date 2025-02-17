import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button, Dropdown, Modal } from 'react-bootstrap';
import { FaUserCircle, FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { MdManageAccounts, MdHelpCenter } from "react-icons/md";
import { IoSettings } from "react-icons/io5";


function Navbarpage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const [show, setShow] = useState(false);

  const toggleSearch = () => setSearchVisible(!searchVisible);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-light shadow-sm" sticky="top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/employee.png" // Replace with your logo URL
            alt="Job Portal Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}>JobPortal</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/job-seeker" className="nav-link">Job Seeker</Nav.Link>
            <Nav.Link href="/recruiter" className="nav-link">Recruiter</Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex">
            {searchVisible && (
              <Form.Control
                type="search"
                placeholder="Search Jobs..."
                className="me-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            )}
            <Button variant="outline-dark" onClick={toggleSearch} style={{marginRight: '10px'}}>
              <FaSearch />
            </Button>
          </Form>

          {/* User Profile Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="outline-dark">
              <FaUserCircle size={24} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#"><MdManageAccounts /> Manage Profiles</Dropdown.Item>
              <Dropdown.Item href="#"><FaUser /> Account</Dropdown.Item>
              <Dropdown.Item href="#"><MdHelpCenter /> Help Center</Dropdown.Item>
              <Dropdown.Item href="#"><IoSettings /> Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/"><FaSignOutAlt /> Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Sign In/Sign Up Button */}
          <Button variant="outline-primary" className="ms-2" onClick={handleShow}>
            Sign In
          </Button>
        </Navbar.Collapse>
      </Container>

      {/* Sign In Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your Mobile Number" />
              <br/>
              <Button variant="success">Generate OTP</Button>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>One Time Password (OTP)</Form.Label>
              <Form.Control type="OTP" placeholder="Enter your OTP" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary">Continue</Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default Navbarpage;
