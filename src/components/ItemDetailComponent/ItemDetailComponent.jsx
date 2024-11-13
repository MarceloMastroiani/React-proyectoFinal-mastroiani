import Card from "react-bootstrap/Card";
import { ItemQuantitySelector } from "../ItemQuantitySelector";
import "./ItemDetail.css";
export const ItemDetailComponent = ({ product }) => {
  return (
    <div className="containerDetail">
      <section>
        <Card key={product.id} className="cardItemImage">
          <Card.Img variant="top" src={product.thumbnail} />
        </Card>
      </section>

      <section>
        <Card key={product.id} className="cardItemDscription">
          <Card.Body>
            <Card.Title className="cardProductTitle">
              {product.title}
            </Card.Title>
            <Card.Text className="cardProductDescription">
              {product.description}
            </Card.Text>
            <Card.Text className="cardProductPrice">
              {`$${product.price}`}
            </Card.Text>
          </Card.Body>
          <ItemQuantitySelector />
        </Card>
      </section>
    </div>
  );
};
