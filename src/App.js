import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import data from './data.js';
import Detail from './components/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios';

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
        {/* 메인, 상품 목록 */}
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
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
          {/* ajax 요청하여 받은 데이터를 state에 추가하기 */}
          <Button variant="primary" onClick={ () => {
            axios.get('https://gist.githubusercontent.com/Cduboo/2b0ff64908348ce677030785c4ab11f2/raw/795c0ca27ec1c22d4fc74839e5a124599136610a/data.json')
            .then((res) => {
              let copy = [...item, ...res.data];
              setItem(copy);
              //setItem(item.concat(res.data));
            })
            .catch(()=>{console.log("실패")})
          } }>더보기</Button>
          </>
        } />
        <Route path="/detail/:id" element={<Detail item={item} />} />
        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>member</div>}></Route>
          <Route path="location" element={<div>location</div>}></Route>
        </Route>
        <Route path="*" element={<div>잘못된 요청입니다.</div>} />
      </Routes>
    {/* App end */}
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
