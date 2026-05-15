// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import Head from "./Head";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_Options, Now_Playing_Api } from "../utils/constant";
import { addNowPlayingMovies } from "../store/movieSlice";
import MainmovieSection from "./MainmovieSection";
import SecondarySection from "./SecondarySection";
import ChatgptSection from "./ChatgptSection";

const Browse = () => {
  const [chatgptToggle, setchatGptToggle] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);
  const getNowPlaying_Api = async () => {
    const fetchdata = await fetch(Now_Playing_Api, API_Options);
    const data = await fetchdata.json();
    // console.log('data: ', data);
    dispatch(addNowPlayingMovies(data?.results));
  };

  const getdataFromHead = (res) => {
    setchatGptToggle(res);
  };

  useEffect(() => {
    getNowPlaying_Api();
  }, []);

  if (!userInfo) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Head sendData={getdataFromHead} />
      <div className="relative ">
        {chatgptToggle ? (
          <ChatgptSection />
        ) : (
          <>
            <MainmovieSection />
            <SecondarySection />
          </>
        )}
      </div>
    </>
  );
};

export default Browse;
