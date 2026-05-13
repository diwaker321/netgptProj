// import React from 'react'

import { useSelector } from "react-redux";
import Head from "./Head";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { API_Options, Now_Playing_Api } from "../utils/constant";

const Browse = () => {
  const userInfo = useSelector((store) => store.user);
  const getNowPlaying_Api = async () => {
    const fetchdata = await fetch(Now_Playing_Api , API_Options)
    const data = await fetchdata.json()
    console.log('data: ', data);
  };

  useEffect(() => {
    getNowPlaying_Api();
  }, []);

  if (!userInfo) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Head />
      <div className="relative top-14 p-5">
        <p>browse section</p>
      </div>
    </>
  );
};

export default Browse;
