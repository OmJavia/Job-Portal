import React from "react";
import JobList from "../components/JobList";
import "./Home.css";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
const jobCategories = [
  { name: "Software", img: "/assets/web.png"  },
  { name: "Design", img: "/assets/design.png" },
  { name: "Marketing", img: "/assets/marketing.png" },
  { name: "Finance", img: "/assets/finance.png" },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center py-5 bg-light">
        <h1 className="text-3xl mb-3">Find Your Dream Job</h1>
        <p>Explore thousands of job opportunities tailored for you.</p>
        <Form className="d-flex justify-content-center my-4">
          <Form.Control type="text" placeholder="Search jobs, companies..." className="w-50" />
          <Button variant="primary" className="ms-2">Search</Button>
        </Form>
      </section>

      {/* Job Categories */}
      <Container className="mt-5">
      <h2 className="text-center mb-4">Popular Job Categories</h2>
      <Row>
        {jobCategories.map((category) => (
          <Col key={category.name} md={3}>
            <Card className="text-center shadow">
            <Card.Img 
              variant="top" 
              src={category.img} 
              alt={`${category.name} Jobs`} 
              style={{ width: "305px", height: "200px", objectFit: "cover" }} 
            />
              <Card.Body>
                <Card.Title>{category.name} Jobs</Card.Title>
                <Button variant="outline-primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

      {/* Latest Jobs */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Latest Job Listings</h2>
        <JobList />
      </Container>

      {/* Call-to-Action for Recruiters */}
      <Container className="mt-5">
        <Alert variant="info" className="text-center shadow">
          <h4>Looking for top talent? Post a job today!</h4>
          <Button variant="primary">Post a Job</Button>
        </Alert>
      </Container>

      {/* Testimonials Section */}
      

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p>© 2025 Job Portal. All rights reserved.</p>
        <p>
          <a href="/" className="text-white">Privacy Policy</a> | 
          <a href="/" className="text-white ms-2">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
