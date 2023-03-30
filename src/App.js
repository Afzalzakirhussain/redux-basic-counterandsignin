import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector, useDispatch } from "react-redux"
// import { increment } from "./actions/index"
// import { decrement } from "./actions/index"
import { increment } from './actions';
import { decrement } from './actions';
import { login } from './actions';
import { logout } from './actions';
function App()
{
  // extracting counter from the central state 
  //useselector has full access to the entire state so we are extracting the required one
  // const countervalue = useSelector(state => state.counter)
  // DISPATCH  says hei dispatch this action to the reducer , reducer checks what to do and the store get updated         
  // const isLogged = useSelector(state => state.isLogged)
  // const dispatch = useDispatch() //gives ability to dispatcha n action 


  const [counterValue, setcounterValue] = useState("");
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch()
  return (
    <div style={{ textAlign: "center" }}>
      {/* <h1>Counter {countervalue}</h1>
      {isLogged && <h3>Valuable information i shouldn't see</h3>}
      <button onClick={() => dispatch(decrement(5))} >-</button>
      <button onClick={() => dispatch(increment(3))}>+</button> */}
      <h1>Counter {counter}</h1> <input type="text" placeholder='Enter a value..' value={counterValue} onChange={(e) => setcounterValue(e.target.value)} /><br /><br />
      <button onClick={() => dispatch(decrement(counterValue ? Number(counterValue) : 1))}>-</button>
      <button onClick={() => dispatch(increment(counterValue ? Number(counterValue) : 1))}>+</button>
      <p>Default value is 1</p>
      {isLogged ? <h2>YOU ARE SIGNED IN</h2> : <h2>YOU ARE NOT SIGNED IN</h2>}
      {isLogged ? <button onClick={() => dispatch(logout())}>SIgn out</button> : <button onClick={() => dispatch(login())}>SIgn in</button>
      }

    </div>
  );
}

export default App;
