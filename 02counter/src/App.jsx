import React from 'react'
import { useState } from 'react';
const App = () => {
  // let counter = 15;


  const [counter , setCounter] = useState(0)
  // here counter = variable , setCounter = function  , useState( )  inside bracket is the initial values ,  it can be an variable  , an object , an empty array
  
  
  const addCounter = () => 
    {
      // counter++;  wrong 
      // console.log(counter)
      setCounter(counter + 1)
    }
  const removeCounter = ()=>
    {
        // counter--;
        // console.log(counter)
        //to use assign we can use something like this 
        /*
         // inside the function remove counter
         counter = counter - 1;     //here we update the counter 
         setCounter(counter)        // here we are passing the updated counter value
        */
       // setCounter(counter % 2)   // cannot assign here eg : cant use counter-- or counter++ , just write whats gonna happen with counter like counter*2 ect

       //now using multiple (batching) the setCouter function 
      /* setCounter(counter - 1)
       setCounter(counter - 1)
       setCounter(counter - 1)
       setCounter(counter - 1)
       */ // this dosent work as we are not passing the updated value of counter

       // to use this we need to use a call back function inside the setCounter function 

       setCounter ( (prevCounter) => prevCounter - 1 )
       setCounter ( (prevCounter) => prevCounter + 1 )
       setCounter ( (prevCounter) => prevCounter + 1 )
       setCounter ( (prevCounter) => prevCounter - 1 ) // HERE  we are using the call back function where we updating the counter value then we are using it
      }
  return (
    <div>
      <h1>hello world</h1>
      <h2>counter value : {counter}</h2>
      <button 
      onClick={addCounter}
      >add value </button>
       {" "}
      <button 
      onClick={removeCounter}
      >remove value</button>
      <p>footer : {counter}</p>
    </div>
  )
}

export default App