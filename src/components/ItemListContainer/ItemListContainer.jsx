import Card from "react-bootstrap/Card";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = ({ products }) => {
  return (
    <div className="container">
      {products.map((product) => {
        return (
          <Card className="cardItem" key={product.id}>
            <Link to={`/item/${product.id}`}>
              <Card.Img
                className="cardImg"
                variant="top"
                src={product.thumbnail}
              />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{`$${product.price}`}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
