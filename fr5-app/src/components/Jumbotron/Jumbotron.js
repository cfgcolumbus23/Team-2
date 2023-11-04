import React from 'react';
import {  Button } from 'react-bootstrap';

import './Jumbotron.css';

function Jumbotron() {
  return (
    <div className="p-5 mb-4 rounded-3 bg-light-teal">
    <div className="container-fluid p-5">
      <h1 className="display-5 fw-bold">Welcome to Future Ready Five</h1>
      <p className="col-md-8 fs-4">
        Future Ready Five is the leading collective impact organization focused on kindergarten readiness in Franklin County...
      </p>
      <Button className="btn btn-primary btn-lg" type="button">
        Learn more
      </Button>
    </div>
  </div>
  );
}

export default Jumbotron;
