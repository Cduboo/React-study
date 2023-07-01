import { useParams } from 'react-router-dom';

function Detail(props) {
  // Route path="/detail/:id" 
  // id라는 이름으로 보낸 파라미터를 바로 꺼내서 사용할 수 있다. {id : '0'}
  let {id} = useParams();
  let item = props.item.find( e => e.id == id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`http://localhost:3000/item${id}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

export default Detail;