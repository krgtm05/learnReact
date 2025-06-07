import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [condition,setCondition] = useState(true); 

  useEffect(function(){
    setInterval(function(){
      setCondition(c=>!c);
    },5000)
  },[])
  return ( <>
    {condition && <Counter/>}
  </> )
}
function Counter(){
  const [count, setCount] = useState(0);
useEffect(function(){
  setInterval( function(){
      setCount(count => count+1);
    },1000)
  },[]) //dependency array
  const increment = () => {
    // setCount(count+1);
  }
  const decrement = () => {
    setCount(count-1);
  }

  const reset = () => {
    setCount(0);
  }
  return <div>
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  </div>
}
export default App
