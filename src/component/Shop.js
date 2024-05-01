import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../state/action'
// import { Actioncreators } from "../stateA/actionA";

const Shop = () => {
  const dispatch  = useDispatch();
  // const action = bindActionCreators(actionCreators,dispatch)
  const {withdrawMoney,depositMoney } = bindActionCreators(actionCreators,dispatch)
  
  return (
    <div>
      <h2> Deposit/Withdraw Money</h2>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2"  onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
       {/* <button className="btn btn-primary mx-2" onClick={()=>{action.withdrawMoney(100)}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2"  onClick={()=>{action.depositMoney(100)}}>+</button> */}
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2"  onClick={()=>{depositMoney(100)}}>+</button>
{/*   
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(Actioncreators.setProject(100))}}>-</button>
      Update Project
      <button className="btn btn-primary mx-2"  onClick={()=>{dispatch(Actioncreators.setProject(100))}}>+</button>
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(Actioncreators.setTask(100))}}>-</button>
      Update Task
      <button className="btn btn-primary mx-2"  onClick={()=>{dispatch(Actioncreators.setTask(100))}}>+</button> */}

     

    </div>
  );
};

export default Shop;
