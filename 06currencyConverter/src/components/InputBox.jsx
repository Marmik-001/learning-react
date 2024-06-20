import React ,{useId} from 'react'
      
function InputBox({
    lable ,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [] , 
    selectedCurrency ="usd",
    amountDisabled = false ,
    currencyDisabled = false ,
    className = "" ,
}) {
    const idForLable = useId()
  return (
    <div className={` ${className}   bg-gradient-to-r from-slate-800 to-slate-400 p-3 rounded-lg text-sm flex `}>
        <div className='w-1-2 '>
            <label htmlFor='idForLable' className='text-white/50 mb-2 inline-block'>{lable}</label>
            <input 
            id='idForLable' // idForLable is a hook used for creating an unique id
            type="number"
            className='outline-none w-full bg-transparent py-1.5 bg-gray-600 text-white pl-2 rounded-e-lg'
            placeholder='Amount'
            disabled ={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}    /* if (onAmountChange) {
                // Call the number if you have it (onAmountChange exists)
                onAmountChange(newValue);
              } long for of writing this  */
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-white/50 mb-2 w-full'>Currency Type</p>
            <select 
            
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            
            value={selectedCurrency}
            onChange= {  (e) => {onCurrencyChange && onCurrencyChange(e.target.value)}   }
            disabled ={currencyDisabled}>
                {currencyOptions.map( (currency) => ( 
                                                        <option 
                                                        key={currency} 
                                                        value={currency}> 
                                                        {currency}
                                                        </option>) ) 
                }

            </select>
        </div>
    </div>
  )
}

export default InputBox