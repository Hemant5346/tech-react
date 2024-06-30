import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "hemant",
    age: 24
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind</h1>
     <Card username="Hemant" btnText="click me" someObj={myObj}/>
     <Card username='Goyal' someObj={myObj}/>
    </>
  )
}

export default App
