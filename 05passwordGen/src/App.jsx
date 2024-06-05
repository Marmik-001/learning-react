import { useState , useCallback , useEffect , useRef } from 'react'
// for useCallback we use memoization  , it mean that storing the results into a cache memory , so when we need it again we dont need to recalculate things and can use the previous answer directly ... 
import './App.css'

function App() {

  const passwordRef = useRef(null)

  // const [count, setCount] = useState(0)
  const [length , setLength] = useState(8);
  const [isChar , setChar] = useState(false);
  const [isNum , setNum] = useState(false);
  const [password , setPassword] = useState('')
  
const generatePassword = useCallback( () => {
  let pass = ''
  let str = 'abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM'

  if(isNum) str += '1234567890'
  if(isChar) str += '!@#$%^&*()_+=-{}][<>.,/?'

  for( let i = 1 ; i < length ; i++){
   const char = Math.floor(Math.random() * str.length + 1)
   pass += str.charAt(char)   // here char is the number that will be selected by the math .random  , so we are appending the character at the 'char' index of the string 'str'... for eg if we get 5 as a random number  , we will append the 'f' into the pass and continue till the length
  }
  setPassword(pass)
} , [length , isChar , isNum])


useEffect( () => {
  generatePassword()
} , [length , isNum , isChar])

const copyPasswordToClipboard = () => {
  window.navigator.clipboard.writeText(password) // we just writing the password into our clipboard
  passwordRef.current.select();  // here we are refrencing to the passwordref that refrences to the input field where the password is displayed  , there we are selecting the current password , and then using the .select() method to select the content in that input field of the password

}

  return (
    < div className=' flex justify-center'>
      <div className='flex flex-col fixed w-3/5 h-2/5 bg-slate-500 mt-2 m-2  items-center'>
        <h1 className=' text-2xl  text-center  w-2/5 text-white mt-5 border-2 border-white p-3 shadow-md bg-black rounded-md hover:scale-105 '>Password Generator</h1>
        <div className='  mt-3 flex flex-row  '>
          <input type="text"
          value={password}
          readOnly className='bg-slate-200 h-8 rounded-s-md w-96'
          ref={passwordRef} /* here we are declaring that the above mentioned refrence named 'passwordref' refers to this input field  */ />  
          <button
          onClick={copyPasswordToClipboard}
           className='px-2 h-8 text-white text-md   rounded-e-md  shadow-lg text-center bg-slate-800 '>copy</button>
        </div>

        <div>
          <input type="range" 
          name="" 
          min={6}
          max={20}
          value={length}
          className='cursor-pointer '
          onChange={ (e) => setLength(e.target.value)}
          id="" />
         <label className='text-orange-600  font-bold'>Length : {length}</ label>
        </div>
        <div>
          <input 
          type="checkbox"
          name="" 
          id=""
          defaultChecked ={isNum}     
          onChange={() => {             //on change we used an call back function  , 
            setNum((prev) => !prev )     //we called the setNum function and used a callback function to reverse the previous value of the checkbox
            // hence the use of prev => !prev . here prev is just a place holder ... this is used to so when the user does multiple click in a short time  ,then our application can react to it without any errors . as it uses a call back function to keep track of the event
            
            
          }} />
          <label htmlFor="number">Numbers</label>
        </div>
        <div>
          <input type="checkbox" name="" id=""
          defaultChecked ={isChar}
          onChange={ () => {
            setChar( (prev) => !prev )            
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
