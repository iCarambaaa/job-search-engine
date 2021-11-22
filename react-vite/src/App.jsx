import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col sm={12} className="text-center App App-header ">
            <Link to="/">
              <p className="App-link ">Human Resource Mashine</p>
            </Link>
          </Col>
          {/* <CartIndicator cartLength={cart.length} /> */}
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
};

export default App;
