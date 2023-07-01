import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Button, Navbar, Nav, Container } from 'react-bootstrap';
import data from './data.js';

function App() {

  let [item, setItem] = useState(data);
  return (

    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      {/* 상품 출력부 */}
      <div className="container">
        <div className="row">
          {
            item.map(function(item, i) {
              return (
                <Card key={item.id} title={item.title} content={item.content} price={item.price} index={i+1}></Card>
              )
            })
          }
        </div>

        
      </div>
    </div>

  );

}

function Card(props) {
  return (
    <div className="col-md-4">
      {/* <div style={ {backgroundImage:`url("./img/item${props.index}.jpg")`} }>1</div> */}
      <img src={`http://localhost:3000/item${props.index}.jpg`} width="100%"></img>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  )
}

export default App;
