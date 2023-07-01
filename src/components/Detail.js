import { useParams } from 'react-router-dom';

function Detail(props) {
  let {id} = useParams();
  let item = props.item.find( e => e.id == id);
  console.log(id)
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