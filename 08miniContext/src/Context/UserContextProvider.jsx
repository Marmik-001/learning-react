import React, { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user , setUser] = useState(null)
    return (
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider


// we import the userContext here  , after that inside the export function we pass in a children object as an argument ({children}) =>{
  // inside the function we will create a use state hook that will be null initially  , also name of var is user  , method name is setUser
  // we will return the <UserContext.Provider value> with a value that destructures user and setUser, we will also pass children  

//}