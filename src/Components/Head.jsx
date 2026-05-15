import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../utils/firebase";
import { useSelector } from "react-redux";
import { NetflixLOGO } from "../utils/constant";
import { useState } from "react";

const Head = ({ inputtoggle, handleinputtoggle, sendData }) => {
  const [chatgptToggle, setchatGptToggle] = useState(false);
  const handletoggle = () => {
    handleinputtoggle(!inputtoggle);
  };

  const navigate = useNavigate();
  const userInfo = useSelector((store) => store.user);
  // console.log('userInfo: ', userInfo);

  const handlesignout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const handleGPTtoggle = () => {
    const newVlaue = !chatgptToggle;
    setchatGptToggle(newVlaue);
    sendData(newVlaue);
  };
  const location = useLocation();
  return (
    <div className="mainheaderSection absolute z-10 flex justify-between px-25 items-center bg-gradient-to-b from-black/80 to-transparent">
      <img className="cursor-pointer" width={"19%"} src={NetflixLOGO} alt="" />

      <div className="flex  gap-2 items-center">
        {location.pathname === "/browse" ? (
          <>
            <h1 className="text-xl text-white font-medium px-2">
              Hello {userInfo?.displayName}
            </h1>
            <button
              onClick={handlesignout}
              className="text-white bg-red-600 py-1 cursor-pointer text-sm px-4 border-none rounded-md"
            >
              Log Out
            </button>
            <button onClick={handleGPTtoggle}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/12222/12222588.png"
                className="w-7 ms-3 cursor-pointer"
                alt=""
              />
               {/* <i className="fa-brands fa-openai"></i> */}
               {/* <i className="fa-solid fa-brain fa-2xl text-white"></i> */}
            </button>
          </>
        ) : (
          <button
            onClick={handletoggle}
            className="text-white bg-red-600 py-1 cursor-pointer px-4 border-none rounded-md"
          >
            {inputtoggle ? "Sign In" : "Sign Up"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Head;
