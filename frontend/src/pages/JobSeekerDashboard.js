import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Navbar, Nav, Form } from "react-bootstrap";
import { FaSearch, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import "animate.css";
import "./JobSeekerDashboard.css";

const JobSeekerDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const jobResults = [
    { id: 1, company: "Google", role: "Software Engineer", hrName: "John Doe", phone: "+91 98765 43210", email: "john.doe@google.com", whatsapp: "+91 98765 43210", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"},
    { id: 2, company: "Amazon", role: "UI/UX Designer", hrName: "Sarah Lee", phone: "+91 87654 32109", email: "sarah.lee@amazon.com", whatsapp: "+91 87654 32109", logo: "https://imgs.search.brave.com/cgSrw7TO-XY16wX0N67A8jK38n2AdldK43M53Vi85EE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc"},
    { id: 3, company: "Flipkart", role: "Backend Developer", hrName: "Michael Kate", phone: "+91 77654 32109", email: "michael.kate@flipkart.com", whatsapp: "+91 77654 32109", logo: "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png" },
    { id: 4, company: "Microsoft", role: "Cloud Engineer", hrName: "David Smith", phone: "+91 76543 21098", email: "david.smith@microsoft.com", whatsapp: "+91 76543 21098", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { id: 5, company: "Apple", role: "iOS Developer", hrName: "Emma Watson", phone: "+91 65432 10987", email: "emma.watson@apple.com", whatsapp: "+91 65432 10987", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { id: 6, company: "Tesla", role: "AI Engineer", hrName: "Elon Musk", phone: "+91 54321 09876", email: "elon.musk@tesla.com", whatsapp: "+91 54321 09876", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" },
    { id: 7, company: "Netflix", role: "Frontend Developer", hrName: "Sophia Miller", phone: "+91 43210 98765", email: "sophia.miller@netflix.com", whatsapp: "+91 43210 98765", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { id: 8, company: "Adobe", role: "Graphic Designer", hrName: "Oliver Brown", phone: "+91 32109 87654", email: "oliver.brown@adobe.com", whatsapp: "+91 32109 87654", logo: "https://www.adobe.com/federal/assets/svgs/adobe-logo.svg" },
    { id: 9, company: "Meta", role: "Data Scientist", hrName: "Liam Johnson", phone: "+91 21098 76543", email: "liam.johnson@meta.com", whatsapp: "+91 21098 76543", logo: "https://scontent.fblr22-2.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=KtwkEe7_toUQ7kNvgEOraxr&_nc_oc=AdjPL2HEiWuXj3JhIkdqrXsST9jgQaOdLzlV9BoDE-mChQO27OtPqrmyU2Khjoiiayw&_nc_zt=14&_nc_ht=scontent.fblr22-2.fna&_nc_gid=AzyTMv_2lld_gpx2MfFaJIU&oh=00_AYAiPuOl_Fm6aERvwYt4BHnYa8Ky5lVcdftczy44XmsFgA&oe=67B91EF9" }
  ];

  // Calculate indexes for slicing
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobResults.slice(indexOfFirstJob, indexOfLastJob);

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < Math.ceil(jobResults.length / jobsPerPage)) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

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
          <Col md={6} className="p-4 bg-white rounded shadow animate__animated animate__fadeInLeft">
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
          <Col md={6} style={{textAlign: "end"}}>
          <img src="https://img.freepik.com/free-vector/flat-employment-agency-search-new-employees-hire_88138-802.jpg?t=st=1739792038~exp=1739795638~hmac=d279819f9a280006b7c8ad6a5c04e5bb3cc9f55c875469e514a418c6bdebe722&w=1060" alt="Find Jobs" className="img"  style={{width: "600px"}}/>
          </Col>
        </Row>

        <Row className="mt-4 animate__animated animate__fadeInRight">
          <Col md={12}>
            <h4>Job Listings</h4>

            {currentJobs.map((job) => (
              <Card className="mb-3 shadow-sm" key={job.id}>
                <Card.Body className="d-flex align-items-center">
                  <img src={job.logo} alt="Company Logo" className="company-logo me-3" />
                  <div className="flex-grow-1">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h5>{job.company}</h5>
                      <h6><strong>Role:</strong> {job.role}</h6>
                    </div>

                    <p>
                      <strong>HR:</strong> {job.hrName} <br />
                      <strong>Phone:</strong> {job.phone} <FaPhone className="ms-1" /> <br />
                      <strong>Email:</strong> {job.email} <FaEnvelope className="ms-1" /> <br />
                      <strong>WhatsApp:</strong> {job.whatsapp} <FaWhatsapp className="ms-1" />
                    </p>
                    <Button href={`https://wa.me/${job.whatsapp.replace("+", "").replace(" ", "")}`} target="_blank" className="connect-btn btn-success">
                      <FaWhatsapp /> Connect on WhatsApp
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}

            {/* Pagination Controls */}
            <div className="pagination bg-white text-dark p-3 d-flex justify-content-between align-items-center">
              <Button variant="outline-dark" onClick={prevPage} disabled={currentPage === 1}>
                Previous
              </Button>
              <span className="current-page">Page {currentPage}</span>
              <Button variant="outline-dark" onClick={nextPage} disabled={currentPage === Math.ceil(jobResults.length / jobsPerPage)}>
                Next
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobSeekerDashboard;
