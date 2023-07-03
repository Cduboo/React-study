import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import data from './data.js';
import Detail from './components/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
function App() {

  let [item, setItem] = useState(data);
  let navigate = useNavigate();

  return (

    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand onClick={ () => {navigate('/')} }>SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ () => {navigate('/')} }>Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
          {/* 상품 출력부 */}
          <div className="container">
            <div className="row">
              {
                item.map(function(item, i) {
                  return (
                    <Card navigate={navigate} key={item.id} title={item.title} content={item.content} price={item.price} index={i}></Card>
                  )
                })
              }
            </div>
          </div>
          </>
        } />
        <Route path="/detail/:id" element={<Detail item={item} />} />
        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>member</div>}></Route>
          <Route path="location" element={<div>location</div>}></Route>
        </Route>
        <Route path="*" element={<div>잘못된 요청입니다.</div>} />
      </Routes>
  
    </div>

  );

}

function Card(props) {
  return (
    <div className="col-md-4"onClick={ () => {props.navigate(`/detail/${props.index}`)} }>
      {/* <div style={ {backgroundImage:`url("./img/item${props.index}.jpg")`} }>1</div> */}
      <img src={`http://localhost:3000/item${props.index}.jpg`} width="100%"></img>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  )
}

function About() {
  return( 
    <div>
      About
      {/* Route 계층 에서 하위 컴포넌트들을 렌더링할 위치를 지정한다. */}
      <Outlet></Outlet> 
    </div>
  )
}
export default App;
