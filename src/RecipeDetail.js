import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, ListGroup, Row, Col, Container } from 'react-bootstrap';

const recipeDetails = {
  1: { 
    title: 'Spaghetti Carbonara', 
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Pancetta'], 
    instructions: [
      'Cook spaghetti according to package instructions.',
      'Mix eggs and parmesan cheese in a bowl.',
      'Cook pancetta in a pan until crispy.',
      'Combine spaghetti with the egg mixture and pancetta. Serve hot.'
    ] 
  },
  2: { 
    title: 'Chicken Parmesan', 
    ingredients: ['Chicken', 'Parmesan', 'Tomato Sauce', 'Mozzarella'], 
    instructions: [
      'Bread the chicken with Parmesan cheese and breadcrumbs.',
      'Fry the chicken until golden brown.',
      'Top with tomato sauce and mozzarella cheese.',
      'Bake until the cheese is melted and bubbly.'
    ] 
  },
  3: { 
    title: 'Beef Tacos', 
    ingredients: ['Beef', 'Taco Shells', 'Cheese', 'Lettuce'], 
    instructions: [
      'Cook the beef in a pan until browned.',
      'Fill taco shells with beef and toppings of your choice.',
      'Serve with cheese, lettuce, and your favorite sauce.'
    ] 
  },
};

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    setRecipe(recipeDetails[id]);
  }, [id]);

  const handleToggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header className="bg-primary text-white">{recipe.title}</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Card.Title>Ingredients</Card.Title>
                  <ListGroup>
                    {recipe.ingredients.map((ingredient, index) => (
                      <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <Card.Title>Instructions</Card.Title>
                  <Button variant="secondary" onClick={handleToggleInstructions} className="mb-3">
                    {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
                  </Button>
                  {showInstructions && (
                    <ListGroup>
                      {recipe.instructions.map((instruction, index) => (
                        <ListGroup.Item key={index}>
                          <strong>Step {index + 1}:</strong> {instruction}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeDetail;
