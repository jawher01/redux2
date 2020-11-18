import React from 'react'
import './App.css';
import {Connect} from 'react-redux'
import {increment , decrement} from "../src/js/Action/actionCounter"

function App(props) {
  return (
    <div className="App">
    react redux
    <p>{props.count}</p>
    <button onClick={()=>props.increment(s)}>+</button>
    <button onClick={()=>props.decrement(s)}>-</button>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return {
    count :state.count.count

  }
}
const mapDispatchToprops=(dispatch)=>{
return{
  increment:()=>dispatch(increment())
  decrement:()=>dispatch(decrement())
}

}
export default Connect(mapStateToProps,mapDispatchToprops) (App);
