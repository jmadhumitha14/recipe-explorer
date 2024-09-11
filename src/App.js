import React from 'react';
import { Container, Navbar, Nav, Card, Button, Carousel, ListGroup, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import ContactUs from './ReviewUs'; // Import the new Contact Us component

function App() {
  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/"> Recipe Explorer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/recipes">Recipes</Nav.Link>
            <Nav.Link as={NavLink} to="/review">Review Us</Nav.Link> {/* Updated NavLink */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/review" element={<ContactUs />} /> {/* Updated Route */}
      </Routes>
    </Container>
  );
}

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
        <img 
 className="d-block w-100" 
  src="https://play-lh.googleusercontent.com/LAVyOeJhmeNsQfKztiLadOjefi1K4iCdSP6cfrKmVLUxv8wy_fXuvQ1xpoISSNSnWfo" 
  alt="First slide" 
  style={{ width: '750px', height: '550px' }} 
/>
          <Carousel.Caption>
            <h3>Welcome to Recipe Explorer</h3>
            <p>Discover delicious recipes curated just for you.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
 className="d-block w-100" 
  src="recipeimg2.avif" 
  alt="Second slide" 
  style={{ width: '750px', height: '550px' }} 
/>
          <Carousel.Caption>
            <h3>Explore New Flavors</h3>
            <p>Find recipes that excite your taste buds.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
