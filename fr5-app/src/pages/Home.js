import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron/Jumbotron';

// Assuming you have these images in your project's public folder or assets directory
const teamImages = {
  personOne: '/assets/person1.jpg', // Replace with actual path to image
  personTwo: '/assets/person2.jpg', // Replace with actual path to image
  // ... other team members
};

const HomeUsPage = () => {
  return (
    <>
       
    <Jumbotron />

    </>
  );
};

export default HomeUsPage;
