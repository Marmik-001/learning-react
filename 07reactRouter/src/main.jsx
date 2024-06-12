
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter ,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router2 = createBrowserRouter([     // here we are creating a router , its in a form of object
  {
    path : '/' ,     // we give the path
    element : <Layout />,   // also we are using outlet in layout , so when we add a children of this router then it will take the place of outlet     // we give the element ( a jsx file that returns html )
    errorElement : <ErrorPage />,    // error element when user goes to an unknow link through our main page
    children: [       // childern element , its also in a form of an object
      {
        path: '/',                  //by defaut home               
        element: <Home />,        // element same as outer obj
      },
      {                               // we also need to open the about page between the layout element , hence it will also come inside the children tag
        path : 'about' ,       
        element : <About />,        //element about
        errorElement : <ErrorPage />    //error page
      },
      {
        path :"contact" ,
        element : <Contact />,
        
      },
      {
        path : "user/" ,
        element : <User />,
        children : [
          {
            path : ":userId",      // we use colon to access the usePrams hook  , it is used for dynamic links , where the input is not known
            element : <User />
          }
        ]
      },
      {
        
        path : "github",
        element : <Github /> ,
        loader : githubInfoLoader,

      }
    ],
  },
  
])

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout />}>    {/* we are importing the layout*/}
      <Route path='' element = {<Home />} />  {/* no path needed as its on same level and*/}
      <Route path = 'about' element ={<About />} /> {/* add a path so we can access it by going to host/about , here '/' is already added from the root route */}
    </Route>
  )
  
)
//createBrowserRouter is a fnction
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router2} />
    
  </React.StrictMode>,
)
