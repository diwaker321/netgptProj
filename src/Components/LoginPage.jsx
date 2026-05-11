// import React from 'react'

import { useState, useRef } from "react";
import {useNavigate} from "react-router-dom"
import Head from "./Head";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { adduser } from "../store/userSlice";

const LoginPage = () => {
  const [showinput, setShowInput] = useState(false);
  const [showusernameerror, setUsernameError] = useState("");
  const [showEmailmsg, setShowEmailMsg] = useState("");
  const [showPasswordMsg, setshowPasswordMsg] = useState("");
  const handlesignup = () => {
    setShowInput(!showinput);
  };
  const inputref = useRef();
  const passwordref = useRef();
  const emailref = useRef();
  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const handleSubmit = () => {
    let isvalid = true;
    if (showinput && inputref?.current?.value==="") {
      setUsernameError("please enter the Username");
      isvalid = false;
    } else {
      setUsernameError("");
    }
    if (emailref?.current?.value === "") {
      setShowEmailMsg("please enter the email");
      isvalid = false;
    } else if (passwordref?.current?.value === "") {
      setshowPasswordMsg("please enter the password");
      isvalid = false;
    }

    if (isvalid) {
      const auth = getAuth(app);
      if (showinput) {
        createUserWithEmailAndPassword(
          auth,
          emailref?.current?.value,
          passwordref?.current?.value,
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("user: ", user);
            // dispatch(adduser(data))
            navigate("/browse");
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorMessage: ", errorMessage);
            // ..
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          emailref?.current?.value,
          passwordref?.current?.value,
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("user: ", user);
            navigate("/browse");
            // ...
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorMessage: ", errorMessage);
          });
      }

      setUsernameError("");
      setShowEmailMsg("");
      setshowPasswordMsg("");
      if (showinput) {
        inputref.current.value = "";
      }
      emailref.current.value = "";
      passwordref.current.value = "";
    }
  };
  return (
    <div className="loginMainContainer relative">
      <Head inputtoggle={showinput} handleinputtoggle={setShowInput} />
      <img
        className="object-cover w-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/76c5a455-c62c-46d4-8653-3924728113e3/web/IN-en-20260504-TRIFECTA-perspective_596176fe-3b1e-48ec-8a00-a0acb34e68f1_large.jpg"
        alt=""
      />

      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="login absolute text-center  w-110 text-white z-20 rounded-md bg-black/70  p-5  top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl font-bold">Enter your Info to Sign In</h1>
        {!showinput && (
          <p
            onClick={handlesignup}
            className="text-md cursor-pointer hover:text-gray-300"
          >
            Or get started with a new account.
          </p>
        )}
        {showinput && (
          <>
            <input
              ref={inputref}
              className="bg-gray-700 ps-3 py-2 w-80 mt-2"
              type="text"
              placeholder="Enter your text"
              onChange={() => setUsernameError("")}
            />
            {showusernameerror && (
              <p className="text-red-600 ps-2 ">
                <sup className="text-red-600">*</sup>
                {showusernameerror}{" "}
              </p>
            )}
          </>
        )}
        <input
          ref={emailref}
          className="bg-gray-700 ps-3 py-2 w-80 my-2"
          type="email"
          placeholder="Enter your email"
          onChange={() => setShowEmailMsg("")}
        />
        {showEmailmsg && (
          <p className="text-red-600 ps-2 mb-2">
            <sup className="text-red-600">*</sup>
            {showEmailmsg}{" "}
          </p>
        )}
        <input
          ref={passwordref}
          className="bg-gray-700 ps-3 py-2 w-80 mb-2"
          type="password"
          placeholder="Enter your password"
          onChange={() => setshowPasswordMsg("")}
        />
        {showPasswordMsg && (
          <>
            <p className="text-red-600 ps-2 mb-2">
              <sup className="text-red-600">*</sup>
              {showPasswordMsg}
            </p>
          </>
        )}
        <input
          className="bg-red-600 hover:bg-red-700 transition-all duration-200 w-80 py-2 rounded-sm cursor-pointer"
          type="button"
          value={showinput ? "SignUp" : "SignIn"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default LoginPage;
