import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { parents } from '../../data/parents.js'; // Assuming you have a mockData.js file
import {children } from '../../data/children.js';
const ProfilePage = ({ loggedInParentId }) => {
  const [currentParent, setCurrentParent] = useState(null);
  const [childrenList, setChildrenList] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const parent = parents.find((p) => p.id === loggedInParentId);
    setCurrentParent(parent);

    const kids = children.filter((child) => child.parentId === loggedInParentId);
    setChildrenList(kids);
  }, [loggedInParentId]);

  if (!currentParent) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="path-to-image.jpg" />
            <Card.Body>
              <Card.Title>{currentParent.name}</Card.Title>
              <Card.Text>
                Email: {currentParent.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header>Children</Card.Header>
            <ListGroup variant="flush">
              {childrenList.map((child) => (
                <ListGroup.Item key={child.id}>
                  {child.name} - Age: {child.age}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
