import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ReactElement = {   //object
    type: 'a',   //object attributes
    props: {     //object inside object
        href: "https://google.com",
        target: '_blank'
        
    },
    childen: 'Click me to visit google'   // type , props , children all these should be in this order
}

function MyApp(){
    return (
        <div>
            <h1>Custom React app</h1>
        </div>
    )
}
const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>   //another way to doing things is this , just like how we did above
)

const areactElement = React.createElement(    // a creact element where we are using the react method called createElement of the react 
    'a',
    {href: 'https://google.com', target: "_blank"},
    'click to visit google',
    
)


ReactDOM.createRoot(document.getElementById('root')).render(
           //react dom method called create root where we are getting the root by using the getElementById method and rendering it
  <>
  <MyApp />
   {AnotherElement}    
    {areactElement}
   
  </>
    // here {AnotherElement} & {areactElement} can only be used inside of the curly bracket as it returns java script variable
)