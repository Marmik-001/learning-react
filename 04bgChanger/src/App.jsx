import { useState } from 'react'

import './App.css'



import React from 'react'

const App = () => {

  const [color , setColor] = useState('blue');
  function changeColor(color) {
    setColor(color)
  }
  return (
    <div >

   <h1 className=' h-screen w-screen duration-500 justify-center flex text-3xl text-white' style={{backgroundColor : color}}> A BackGround Color Changer App </h1> 
   <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4'>

      <div className=' flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl bg-white  py-3 px-3'>
        <button className='py-2 border-2 rounded-md shadow-md w-14 mx-4 bg-red-600 text-white' 
        onClick={ () => changeColor('red')}
        >red</button>
        <button className='py-2 border-2 rounded-md shadow-md w-14 mx-4 bg-green-500 text-white'
        onClick={ () => changeColor('green')}
        > green</button>
        <button className='py-2 border-2 rounded-md shadow-md w-14 mx-4 bg-cyan-400 text-white'
        onClick={ () => changeColor('cyan')}
        >cyan</button>
        <button className='py-2 border-2 rounded-md shadow-md w-14 mx-4 bg-black text-white'
        onClick={ () => changeColor('black')}
        >black</button>
        
      </div>

   </div>

    </div>
  )
}
  

export default App

// <button className = " tailwind " onClick =  { () => changeColor ('white')
//
//}