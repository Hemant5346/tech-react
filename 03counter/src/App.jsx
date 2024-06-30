import React ,{ useState } from 'react'  // this is basically are hooks 

// hooks are bbassically for connecting the ui

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState("you can pass any thing here") // use state basically return variable and function
  let [counter ,hemantcounter] =useState(0)    // here setcounter is a function
  // let counter=5

  const addValue = () => {
    console.log("clicked",counter);
    // counter =counter +1
    hemantcounter(pluscounter =>pluscounter +1)
    hemantcounter(pluscounter =>pluscounter +1)
    hemantcounter(pluscounter =>pluscounter +1)
    hemantcounter(pluscounter =>pluscounter +1)
  }
  const removevalue =(counter) =>{
    const count=counter
    if(count>0){
      hemantcounter(counter-1)
    }else{
      console.log('not possible')
    }
  }

  return (
    <>
     <h1> Tech with react</h1>
     <h2>counter value : {counter}</h2>

     <button onClick={addValue}>add value {counter}</button>
     <br/>
     <button onClick={removevalue}>remove value {counter}</button>
     <p> footer :{counter}</p>
    </>
  )
}

export default App




