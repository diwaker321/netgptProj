// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import Head from "./Head";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { API_Options, Now_Playing_Api } from "../utils/constant";
import { addNowPlayingMovies } from "../store/movieSlice";

const Browse = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector((store) => store.user);
  const getNowPlaying_Api = async () => {
    const fetchdata = await fetch(Now_Playing_Api , API_Options)
    const data = await fetchdata.json()
    // console.log('data: ', data);
    dispatch(addNowPlayingMovies(data?.results))
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
