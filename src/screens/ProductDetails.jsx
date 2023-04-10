import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";

const ProductDetails = () => {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);
  useEffect(()=>{
    const fetchProduct = async ()=>{
      const {data} = await axios.get(`/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  },[]);
  return (
    <>
      <Link to="/" className="btn btn-light"><i className="fas fa-arrow-left fa-duotone my-3"></i></Link>
      <Row className="my-3">
        <Col md={6}>
          <Image src={Product.image} alt={Product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{Product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={Product.rating}
                text={`${Product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : {Product.price} $</ListGroupItem>
            <ListGroupItem>{Product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>Status :</Col>
                <Col>
                  {Product.countInStock === 0 ? "OUT OF Stock" : "In Stock"}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Button
                  className="bg-primary rounded"
                  type="button"
                  variant="primary"
                  size="md"
                >
                  Add to Cart
                </Button>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;