// import LoginPage from './Components/LoginPage'

import Body from "./Components/Body";
import {useDispatch } from "react-redux";
// import appStore from "./store/appStore";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./utils/firebase"
import { adduser, removeusers } from "./store/userSlice";
// import Head from "./Components/Head"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , displayName , email} = user;
        dispatch(adduser({uid:uid , displayName:displayName , email:email})) 
      } else {
        dispatch(removeusers())
      }
    });
  }, []);

  return (
    <div className="mainContainer relative">
      {/* <Head/> */}
        <Body />
      {/* </Provider> */}
    </div>
  );
}

export default App;
