import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='flex flex-col m-4 items-center  '>
    <div className='pb-10 mt-14'>ERROR 404 NOT FOUND</div>
    <Link to={'/'}> <button className='ruonded-md border-2 p-2 mt-12 mb-2 bg-gradient-to-r from-blue-700 to-violet-400 border-lime-400 ring-2 hover:ring-cyan-300 focus:ring-offset-2'>Return to home</button> </Link>
    </ div>
  )
}

export default ErrorPage