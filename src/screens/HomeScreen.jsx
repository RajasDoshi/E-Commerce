import React,{useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap';
import Productscreen from './ProductScreen';
import axios from 'axios';
const HomeScreen = () =>{
    const[Products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts =async ()=>{
            const{data} = await axios.get("/products");
            setProducts(data);
        };
        fetchProducts();
    },[]);
    return (
        <>
        <Row>
            {Products.map((product,key) => (
                    <Col key={product._id} md={3}  >
                            <Productscreen product={product}/>
                    </Col>
                 ))}
        </Row>
          </>
    );
};
export default HomeScreen;