import React from 'react';
import { Card, Button, CardGroup, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const recipes = [
  { id: 1, title: 'Spaghetti Carbonara', image: 'spaghetti.jpeg' },
  { id: 2, title: 'Chicken Parmesan', image: 'chickenparmesan.jpeg' },
  { id: 3, title: 'Beef Tacos', image: 'beeftacos.jpeg' },
];

function RecipeList() {
  return (
    <Container className="mt-4">
      <CardGroup>
        <Row>
          {recipes.map((recipe) => (
            <Col md={4} key={recipe.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{recipe.title}</Card.Title>
                  <Button variant="primary" as={Link} to={`/recipes/${recipe.id}`} className="mt-auto">
                    View Recipe
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
}

export default RecipeList;
