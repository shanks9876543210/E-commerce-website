import React,{useState,useEffect} from 'react'
import { Link,useParams,useNavigate } from "react-router-dom";
import { Card, Image, Button, Row, Col, ListGroup,Form } from "react-bootstrap";
import Rating from "../Rating";
import axios from 'axios'
function ProductScreen({  }) {
  const [qty,setQty] = useState(1)
  let {id}=useParams();
  const history = useNavigate()
  
    const [product, setProduct] = useState([])
    useEffect(() => {
    async function fetchProduct(){
      const {data}= await axios.get(`/api/products/${id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [])
 
 
  //const product = products.find((p) => (p._id = match.params.id));
  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name}></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: Rs. {product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
                <Row>
                <Col>Price:</Col>
                <Col><strong>Rs. {product.price}</strong></Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                <Col>Status:</Col>
                <Col>
                {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </Col>
                </Row>
            </ListGroup.Item>
            {product.countInStock >0 && (
              <ListGroup.Item>

                <Row>

                  <Col>Qty</Col>
                  <Col xs="auto" className="my-1">
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>





                </Row>
                </ListGroup.Item>
            )}
            <ListGroup.Item>
                <Button className="btn-block" disabled={product.countInStock===0} type="button">Add to Cart</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {product.name}
    </div>
  );
}

export default ProductScreen;
