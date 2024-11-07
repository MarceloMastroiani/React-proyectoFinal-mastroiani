import Card from "react-bootstrap/Card";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";
import { LoaderComponent } from "../LoaderComponent/LoaderComponent";

export const ItemListContainer = ({
  product,
  filterCategory,
  productsCategorys,
  loadingCategorys,
  errorCategorys,
}) => {
  console.log(loadingCategorys);
  return (
    <div className="container">
      {filterCategory === "all" ? (
        product.map((product) => {
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
        })
      ) : loadingCategorys ? (
        <LoaderComponent />
      ) : filterCategory === "laptops" || filterCategory === "smartphones" ? (
        productsCategorys.map((product) => {
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
        })
      ) : errorCategorys ? (
        <div>Hubo un error</div>
      ) : (
        <div>No hay productos para este filtro</div>
      )}
    </div>
  );
};
