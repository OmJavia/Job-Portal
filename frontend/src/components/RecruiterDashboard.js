import React, { useState } from "react";
import { Button, Card, Form, Container, Row, Col, Modal, Table } from "react-bootstrap";
import { FaPlusCircle, FaTrash } from "react-icons/fa";

// Sample data for posted jobs
const sampleJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Solutions",
    location: "Remote",
    applicants: 10,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Design Studio",
    location: "New York",
    applicants: 5,
  },
];

const RecruiterDashboard = () => {
  const [jobs, setJobs] = useState(sampleJobs);
  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
  });

  // Handle showing the modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handle job post form submission
  const handlePostJob = () => {
    setJobs([
      ...jobs,
      { ...newJob, id: jobs.length + 1, applicants: 0 },
    ]);
    setNewJob({ title: "", company: "", location: "" });
    handleCloseModal();
  };

  // Handle deleting a job
  const handleDeleteJob = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Recruiter Dashboard</h2>

      {/* Button to Post New Job */}
      <Button variant="primary" onClick={handleShowModal} className="mb-4">
        <FaPlusCircle /> Post a New Job
      </Button>

      {/* Jobs Table */}
      <Row>
        {jobs.length === 0 ? (
          <h4>No Jobs Posted Yet!</h4>
        ) : (
          jobs.map((job) => (
            <Col key={job.id} md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                  <Card.Text>{job.location}</Card.Text>
                  <Button variant="info" className="me-2">View Applicants ({job.applicants})</Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteJob(job.id)}
                  >
                    <FaTrash /> Delete Job
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Modal to Post a New Job */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Post a New Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="jobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job title"
                value={newJob.title}
                onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="companyName">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                value={newJob.company}
                onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="jobLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job location"
                value={newJob.location}
                onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePostJob}>
            Post Job
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default RecruiterDashboard;
