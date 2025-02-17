import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, ListGroup, Navbar, Nav, Form } from "react-bootstrap";
import { FaSearch, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import JobList from "../components/JobList";
import "animate.css";
import "./JobSeekerDashboard.css";

const JobSeekerDashboard = () => {
  const [stats, setStats] = useState({
    appliedJobs: 5,
    savedJobs: 2,
    recentApplications: [
      { jobTitle: "Software Engineer", company: "Tech Co.", status: "Pending" },
      { jobTitle: "Product Manager", company: "Innovative Solutions", status: "Interview Scheduled" },
    ],
  });

  const [jobResults, setJobResults] = useState([
    { id: 1, company: "Google", hrName: "John Doe", phone: "+91 98765 43210", email: "john.doe@google.com", whatsapp: "+91 98765 43210", logo: "https://via.placeholder.com/50" },
    { id: 2, company: "Amazon", hrName: "Sarah Lee", phone: "+91 87654 32109", email: "sarah.lee@amazon.com", whatsapp: "+91 87654 32109", logo: "https://via.placeholder.com/50" },
  ]);

  return (
    <div>
      <Navbar className="bg-light">
        <Container fluid>
          <Navbar.Brand href="#">JobSeeker Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Overview</Nav.Link>
            <Nav.Link href="/my-applications">My Applications</Nav.Link>
            <Nav.Link href="/saved-jobs">Saved Jobs</Nav.Link>
            <Nav.Link href="/profile">Profile Settings</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          <Col>
            <h2 className="animate__animated animate__fadeInDown">Welcome, Om Javia!</h2>
            <p>Here's your dashboard where you can view your job applications, track progress, and more!</p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12} className="p-4 bg-white rounded shadow animate__animated animate__fadeInLeft">
            <h4>Find Jobs</h4>
            <Form>
              <Form.Group>
                <Form.Label>Looking For</Form.Label>
                <Form.Control type="text" placeholder="Job Title" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Skills</Form.Label>
                <Form.Control type="text" placeholder="Enter Skills" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Experience</Form.Label>
                <Form.Control type="number" placeholder="In Years" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="City, State" />
              </Form.Group>
              <div className="mt-3">
                <Button variant="primary" className="me-2">
                  Search <FaSearch />
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <Row className="mt-4 animate__animated animate__fadeInRight">
          <Col md={12}>
            <h4>Job Listings</h4>
            {jobResults.map((job) => (
              <Card className="mb-3 shadow-sm" key={job.id}>
                <Card.Body className="d-flex align-items-center">
                  <img src={job.logo} alt="Company Logo" className="company-logo me-3" />
                  <div className="flex-grow-1">
                    <h5>{job.company}</h5>
                    <p>
                      <strong>HR:</strong> {job.hrName} <br />
                      <strong>Phone:</strong> {job.phone} <FaPhone className="ms-1" /> <br />
                      <strong>Email:</strong> {job.email} <FaEnvelope className="ms-1" /> <br />
                      <strong>WhatsApp:</strong> {job.whatsapp} <FaWhatsapp className="ms-1" />
                    </p>
                    <Button href={`https://wa.me/${job.whatsapp.replace("+", "").replace(" ", "")}`} target="_blank" className="connect-btn">
                      <FaWhatsapp /> Connect on WhatsApp
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}

            <div className="pagination bg-white text-dark p-3 d-flex justify-content-between align-items-center">
              <Button variant="outline-dark" className="prev-btn">Previous</Button>
              <span className="current-page">Page 1</span>
              <Button variant="outline-dark" className="next-btn">Next</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobSeekerDashboard;
