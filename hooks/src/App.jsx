import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   let [counter, setCounter] = useState(12);


  function addValue(){
    // console.log("clicked", {counter})
    if(counter >=20){
      return;
    } else{
      setCounter(counter + 1);

      // interviewQuestion

      // setCounter(counter+1)
      // setCounter(counter+1)    if we did this what happen : value is still increase by 1
      // setCounter(counter+1)   
      // setCounter(counter+1)

      //  what to do?

      // setCounter(prevCounter => counter + 1)
      // setCounter(prevCounter => counter + 1)    Now it is increase by 4
      // setCounter(prevCounter => counter + 1)
      // setCounter(prevCounter => counter + 1)
    }
  }
  function removeValue(){
    // console.log("clicked", {counter})
    if(counter <= 0){
      return ;
    }else {

      setCounter(counter - 1);
    }
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>CountDown : {counter}</h2>
      <button onClick={addValue}>add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      <p>value{counter}</p>
    </>
  )
}

export default App
