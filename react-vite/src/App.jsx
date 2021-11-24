import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Home from "./components/home";
import { connect } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col sm={12} className="text-center background-div App App-header">
            <Link to="/">
              <h1 className="App-link">Human Resource Mashine</h1>
            </Link>
          </Col>
          <Home />
        </Row>
        <hr />
        <Routes>
          {/* <Route path='/' element={<BookStore addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path='*' element={<h1>404 - Not Found</h1>} /> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
