import React from 'react'

const Card = ({ userName = "User Name" , pfp = "https://wallpapers.com/images/hd/blank-default-pfp-wue0zko1dfxs9z2c.jpg" ,}) => {   // we take in a prop as an passing field  ,
   // now here instead of using the props directly and everytime using props.userName ect , we can destructure it 
   // and write different fields into it  , also we can assign the default values to these fields like userName = 'User Name'
  return (
    <div>
        <figure className='md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800'>
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={pfp} alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. Its easy to customize, adapts to any design,
        and the build size is tiny.”
      </p> 
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {userName}  
       
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}
// in here on line 19  , we are using javascript tag { }   to pass the variable , this variable is a props . userName  , here prop is an object , . userName is the variable that we need to access
// this userName contains the value sent by the <card /> where we are going to use this component
export default Card

//on line 20 instead of using the props.userName we can directly use the userName as we have already destructured it 