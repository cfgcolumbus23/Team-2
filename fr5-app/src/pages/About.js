import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron/Jumbotron';

// Assuming you have these images in your project's public folder or assets directory
const teamImages = {
  personOne: '/assets/person1.jpg', // Replace with actual path to image
  personTwo: '/assets/person2.jpg', // Replace with actual path to image
  // ... other team members
};

const AboutUsPage = () => {
  return (

    <>
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1>About Future Ready Five</h1>
          <p>
            Future Ready Five is the leading collective impact organization taking a holistic approach to kindergarten readiness in Franklin County. In pursuit of equity, access, and inclusion, our focus is on developing systems, elevating early childhood education, and inspiring advocacy until all young children are fully prepared for kindergarten.
          </p>
          <p>
            As a dedicated team, we collaborate with partner organizations, corporations, individuals, and families to ensure that by 2030, 100% of our county's children demonstrate kindergarten readiness, giving them a better chance at a happy and successful life.
          </p>
        </Col>
      </Row>

      <Row>
        <h2>Our Team</h2>
        {/* Map over your team members here */}
        {Object.entries(teamImages).map(([key, imageSrc]) => (
          <Col md={4} className="mb-4" key={key}>
            <Card>
              <Image src={imageSrc} roundedCircle className="p-3" />
              <Card.Body>
                <Card.Title>Team Member Name</Card.Title>
                <Card.Text>
                  Brief description or bio of the team member.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </>
  );
};

export default AboutUsPage;
