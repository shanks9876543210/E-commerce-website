import React from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'; // Corrected import statement
import { addItem } from './redux/slices/cartSlice';
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product, ...props }) {
  const dispatch = useDispatch();
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image}  />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as="h3">Rs. {product.price}</Card.Text>
        <Rating
          value={product.rating}
          text={`${product.numReviews}  reviews `}
          color={"#f8e825"}
        />
        <Button variant="primary" onClick={() => dispatch(addItem( product ))}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
