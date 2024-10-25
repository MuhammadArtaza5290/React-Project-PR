import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setCounter] = useState(0);

const onClickAdd = () => {
  setCounter(counter + 1)
  console.log(counter);
  if (counter == 20) {
    setCounter(20);
  }
}
const onClickRemove = () => {
  setCounter(counter - 1);
  console.log(counter);
  if (counter == 0){
    setCounter(0);
  }
}
const onClickReset = () =>{
  setCounter(0);
}
  return (
    <>
     <h1>React counter app</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={onClickAdd}>Add value</button><br />
     <button onClick={onClickRemove}>Remove value</button><br />
     <button onClick={onClickReset}>Reset</button>
    </>
  )
}

export default App
