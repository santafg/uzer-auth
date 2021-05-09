import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  // async function getLoggedIn() {
  //   const loggedInRes = await axios.get("/auth/loggedIn");
  //   setLoggedIn(loggedInRes.data);
  // }

  // useEffect(() => {
  //   getLoggedIn();
  // }, []);
  return <AuthContext.Provider value={{loggedIn}}>
      {props.children}
  </AuthContext.Provider>;
}

export default AuthContext;
export  {AuthContextProvider};
