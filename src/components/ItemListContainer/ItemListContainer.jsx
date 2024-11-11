import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";
import { LoaderComponent } from "../LoaderComponent/LoaderComponent";
import { useAllProductsByFilter } from "../../hooks/useProducts";

export const ItemListContainer = ({ dataCategory, product }) => {
  const {
    products: productsCategorys,
    loading,
    error: errorCategorys,
    dataFilter,
  } = useAllProductsByFilter("products", "category", dataCategory);

  console.log(loading);

  return (
    <div className="container">
      {loading ? (
        <LoaderComponent />
      ) : errorCategorys ? (
        <div>Hubo un error</div>
      ) : dataFilter === "all" ? (
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
      ) : dataFilter === "laptops" || dataFilter === "smartphones" ? (
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
      ) : (
        <div>No hay productos para este filtro</div>
      )}
    </div>
  );
};
