import * as React from "react";
import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import "./App.css";
import Home from "./Home";
import  About from "./About";
import Product from "./products/product";
import Error from "./Error";
import Register from "./Register";
import Login from "./Login";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>title</title>
      </Helmet>
      <div className="App">
        <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
          <Navbar.Brand>
            <img src={logo} alt="placeholder" />
            Company Name
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown className="NavDropdown" title="Products">
                <NavDropdown.Item href="#products/product">Product</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="login">Login</NavDropdown.Item>
                <NavDropdown.Item href="register">Register</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/product" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;