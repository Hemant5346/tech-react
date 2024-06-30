import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



function MyApp(){
  return(
    <div>
      <h1>
        Hemant
      </h1>
    </div>
  )
}
const anotheruser ="hrnkfjb"


const reactelement =React.createElement(
  "a",
  {href:"https://google.com",target:'_blank'},
  'clicke me ',
  anotheruser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
