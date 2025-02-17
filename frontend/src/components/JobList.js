import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch jobs from the API on component mount
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/jobs')
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Error fetching jobs.');
        setLoading(false);
      });
  }, []);

  // Loading state with spinner
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  // Display error if any
  if (error) {
    return <div className="text-center my-5 text-danger">{error}</div>;
  }

  // No jobs available message
  if (jobs.length === 0) {
    return <div className="text-center my-5">No jobs available at the moment.</div>;
  }

  // Render job cards in a responsive grid
  return (
    <Row>
      {jobs.map((job) => (
        <Col key={job._id} md={4} className="mb-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{job.location}</Card.Subtitle>
              <Card.Text>
                <strong>Experience:</strong> {job.experience} years<br />
                <strong>Max CTC:</strong> {job.maxCTC} LPA
              </Card.Text>
              <Button variant="primary">Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default JobList;
