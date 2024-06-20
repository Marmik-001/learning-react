import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrency from './hooks/UseCurrency'
function App() {

  const [amount ,setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to , setTo] = useState('inr')
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyData = useCurrency(from)  // we are storing the data that we get from the useCurrency into a variable  , also we are passing the default value into it that is 'from'

   const option = Object.keys(currencyData) 
 // The Object.keys() method takes an object and returns an array of the object's own enumerable property names (keys).
  // In this case, it extracts the currency codes from the currencyData object.

  const convert = () => {
    setConvertedAmount(amount *currencyData[to])
  }
  // const swap = () => {
  //   setFrom(to)
  //   setTo(from)
  //   setConvertedAmount(amount)
  //   setAmount(convertedAmount)
  // }  feature not added
  return (
  
    /* <div className='bg-gradient-to-r from-orange-950 to-slate-50'>
    < h1 className='justify-center  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-7xl font-bold'> Hellow World</h1>

     <button className='animate-bounce shadow-lg shadow-indigo-500/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-3 hover:scale-105 border-slate-700 border-2 p-2  duration-500 bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-400 from-15% hover:to-blue-400 to-90%  h-16 w-56 m-44'> hello world 
     <div className=' transition delay-500 animate-ping  ease-in-out duration-500 fixed -top-1 -right-1 rounded-full bg-blue-500  min-h-3 min-w-3 '></div>
      </button> 
      </div> */

    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage : "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjews_uFOvkEhxWdFNDSLzVTRasSRrpvu73SdiGbgcIJbLwwu1-7UFdqbr6dWyY3T6AZgZ6_Su0JT5F32yTs4ftFmb1Xm72yLtuEowoNwpMEiMsw7fTIc7WS3qzodmY1scgjzOopu-3mTE_/s16000-rw/heroscreen.cc-V1-01282021-stock-market-wallpaper-HD.png')"}}>
    
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()       /* e.preventDefault() is a method in JavaScript that is used to prevent the default behavior of an event from occurring. This method is often used in the context of handling form submissions, link clicks, and other actions where you want to override the browser's default behavior with custom functionality. */
            convert()
          }}>
            <div className='w-full my-2'>
              <InputBox
              lable='from'
              amount={amount}
              currencyOptions={option}
              onCurrencyChange={ (currency) =>setFrom(currency)}
              onAmountChange={ (amount) => setAmount(amount)}
              selectedCurrency={from} 
              />
            </div>
            <div className='w-full my-2'>
              <InputBox
              lable='to'
              amount={convertedAmount}
              currencyOptions={option}
              amountDisabled 
              onCurrencyChange={ (currency) =>setTo(currency)}
              onAmountChange = { (convertedAmount) => setConvertedAmount(convertedAmount)}
              selectedCurrency={to} 
              />
            </div>
            <button 
            type='submit'
            className='w-full  bg-gradient-to-r from-slate-800 to-slate-400 hover:bg-gradient-to-r hover:from-slate-800 hover:from-30% hover:to-slate-400 rounded-t-lg p-2 text-lg text-white '
            > Convert {from} to {to}

            </button>
          </form>
        </div>
      </div>

    </div>

  )
}

export default App
