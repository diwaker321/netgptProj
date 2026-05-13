// import React from 'react'

import { useSelector } from "react-redux"
import Head from "./Head"
import { Navigate } from "react-router-dom"

const Browse = () => {
  const userInfo = useSelector(store=>store.user)

  if(!userInfo){
    return <Navigate to="/" />
  }
  return (
    <>
    <Head/>
    <div className="relative top-14 p-5">
      <p>browse section</p>
    </div>
    </>
  )
}

export default Browse
