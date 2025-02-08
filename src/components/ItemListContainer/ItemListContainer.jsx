import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";
import { LoaderComponent } from "../LoaderComponent";
import { useAllProductsByFilter } from "../../hooks/useProducts";

export const ItemListContainer = ({ dataCategory, product }) => {
  // console.log("dataCategory", dataCategory);
  // console.log("product", product);
  const {
    products,
    loading,
    error: errorCategorys,
    dataFilter,
  } = useAllProductsByFilter("products", "category", dataCategory);

  return (
    <div className="container">
      {/* El loading se setea en true para mostrar el componente y se setea en false cuando termina de cargar despues se verifica si hay error y si no se muestra el producto que se pasa por props */}
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
      ) : dataFilter !== "all" ? (
        products.map((product) => {
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
