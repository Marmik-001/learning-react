import React, { useState , useContext } from 'react'
import UserContext from '../Context/UserContext'
import {PasswordContext} from '../Context/ContextForPassword/PasswordContextProvider'

function Login() {

  const [username , setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)
  const {setPass} = useContext(PasswordContext)
  const handleSubmit = (e) => {
    //
    e.preventDefault()
    
    setUser({username })
    setPass({password})
  }

  return (
    <div>
      <h2>login </h2>
      <input 
      type="text"
      value={username}   // we set the value to username  
      onChange={ (e) => setUsername(e.target.value)}    // onChange we will take the event and run the setUsername method  , i.e useState method to update the username
      placeholder='User Name'
      id="" />
      {" "}
      <input 
      type="password" 
      placeholder='password'
      value={password}
      onChange={ (e) => setPassword(e.target.value)}
        />
        <button
        onClick={handleSubmit}>
          submit
        </button>
      
    </div>
  )
}

export default Login