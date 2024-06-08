import { useState , useEffect } from "react";

function useCurrency(currency){                  // currency is the parameter that will be passed
    const [data , setData] = useState({});
    useEffect( () => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`)   // using the fetch to fetch the data , here we used the currency to pass the currencey code like usd or inr  , that will depend on the parameter given to us 
    .then( (res) => res.json())             //we get a response  , then we convert the response into a json file , in XCO we dont need to convert it
    .then((res) => setData(res[currency]))  //finally we set the data by using the setData funciton as a callback function , this json file gives us an whole object , also with date .. but we only need the currency data , so we use the res[currency]  to get only the currency data
    } , [currency])

    console.log(data);

    return data   // returning the fetched data to the user of the hook
}
export default useCurrency;
//XCO => feature related to fetching  , better as it does not need the conversion of files to json