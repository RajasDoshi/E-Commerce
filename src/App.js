import {Container} from "react-bootstrap";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/footer'
import Header from "./components/header";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import React from "react";
function App() {
  return (
    <>
    <Router>
      <Header/>
    <main>
    <Container>
      <Routes>
        <Route exact path="/" element ={<HomeScreen/>}></Route>
        <Route
        exact 
        path="/product/:id"
        element={<ProductDetails/>}
        ></Route>
        </Routes>
           </Container>
        </main>
         <Footer/>
         </Router>
          
    </>
  );
}

export default App;
