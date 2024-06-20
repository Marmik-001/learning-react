import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import {PasswordContext} from '../Context/ContextForPassword/PasswordContextProvider'
const Profile = () => {
  const {pass }= useContext(PasswordContext)
  const {user} = useContext(UserContext)
  if(!user) return <h1>fialed to load</h1>
  return (
    <div>Profile {user.username} password : {pass.password}</div>
  )
}

export default Profile