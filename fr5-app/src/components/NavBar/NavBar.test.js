// NavBar.test.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

// A custom render to wrap components with a Router since the NavBar uses Link from react-router-dom
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, { wrapper: Router });
};

describe('NavBar', () => {
  test('renders NavBar component', () => {
    renderWithRouter(<NavBar />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/services/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test('navigates to the correct page when link is clicked', () => {
    // This test would simulate a click on a link and assert the navigation has occurred
    // This requires further setup and possibly a custom history object
  });

  // Add more tests as needed for your specific implementation
});

