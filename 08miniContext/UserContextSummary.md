 UserContext

 const UserContext = React.createContext()

 UserContextProvider

 passing children as an argument 

 const UserContextProvider = ({children} => {
    const [user , setUser] = useState(null)
    return 
    <UserContext.Provider value ={{user ,setUser}}>
        {children}
    </UserContext.Provider>
 })


 login 

 const {setUser} = useContext(UserContext)

 then on submit we will pass in the username into the setUser
 setUser({username})  


 
  
 basically we create a context in a different file by using the inbuilt react function 
 after that to give that a context Provider we crearte a new file for that 
 in that we make a const UserContextProvider that will take children as an argument inside the function we will create  a useState
 to get the user and setUser 
  then we will return the context by provider method  like // UserContext>provider 
  with a value {{user , setUser}} 
  
  after that in the login page we will use a useContext hook to give a refrence to the context

  const {setUser} = useContext(UserContext)
  on submit we will call the setUser method and pass the username

  finally to use it we import the UserContext into the file there we again use the useContext hook const {user} = useContext(UserContext)
   and use it like user.username
