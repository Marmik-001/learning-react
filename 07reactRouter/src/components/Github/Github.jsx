import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data , setData] = React.useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Marmik-001`)
    //     .then((Response) => Response.json())
    //     .then(data => {
    //         setData(data)
    //         console.log(data);
    //     })
    // } , [])

    const data = useLoaderData()
    // console.log(data)

  return (
    <div className='flex flex-row'>
        <img className='h-20 w-20 m-4 ' src = {data.avatar_url} alt="asdfasdf" />
        <div className='flex flex-col'>
            <h1 className='text-2xl pt-3 hover:text-slate-300'><a href= {data.html_url}>{data.login} </a></h1>
            <h2 className='text-xl pt-1 hover:text-slate-300 '> <a href= {data.html_url}>Visit Me</a> </h2>
        </div>
        
        
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => 
    {
        const Response = await fetch('https://api.github.com/users/Marmik-001')
        return await Response.json()
    }