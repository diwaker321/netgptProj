import { useLocation , useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../utils/firebase";

const Head = ({ inputtoggle, handleinputtoggle }) => {
  const handletoggle = () => {
    handleinputtoggle(!inputtoggle);
  };

  const navigate = useNavigate()

  const handlesignout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };
  const location = useLocation();
  return (
    <div className="mainheaderSection absolute z-10 flex justify-between px-35 items-center">
        <img
          className="cursor-pointer"
          width={"19%"}
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
        />

      {location.pathname === "/browse" ? (
        <button
          onClick={handlesignout}
          className="text-white bg-red-600 py-1 cursor-pointer text-sm px-4 border-none rounded-md"
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={handletoggle}
          className="text-white bg-red-600 py-1 cursor-pointer px-4 border-none rounded-md"
        >
          {inputtoggle ? "Sign In" : "Sign Up"}
        </button>
      )}
    </div>
  );
};

export default Head;
