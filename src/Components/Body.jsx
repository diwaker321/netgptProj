// import React from 'react'
import Browse from "./Browse"
// import Head from "./Head"
import LoginPage from "./LoginPage"
import  { createBrowserRouter , RouterProvider} from "react-router-dom"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<LoginPage/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
  return (
    <div className="absolute">
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
