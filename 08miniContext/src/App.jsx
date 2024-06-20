import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'
import PasswordContextProvider from './Context/ContextForPassword/PasswordContextProvider'
// import PasswordContextProvider from './Context/ContextForPassword/PasswordContextProvider'
function App() {
  const [count, setCount] = useState(0)

  return (
  <UserContextProvider>
   <PasswordContextProvider>
   <div className='bg-cyan-400'>
      lol
      <Login />

      <Profile /> 
    
    </div>
    </PasswordContextProvider> 
    </UserContextProvider>
   
  )
}

export default App


{/* 

first we need two things  , a place to store/create the context  , secons is the context provider , then to use it we import the
we can do this in any file that we need to use the context  in app.jsx file we import the UserContextProvider   , we surround the place where we need the context(the var , fun or anything) with the UserContextProvider tag
now the var that we need is in the Login component , so we go there
*/}