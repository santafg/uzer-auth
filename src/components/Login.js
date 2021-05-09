import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {getLoggedIn} = useContext(AuthContext);
  const history = useHistory();
  
    async function login(e) {
        e.preventDefault();
    
        try {
          const loginData = { email, password };
    
          await axios.post("https://uzer-auth.herokuapp.com/auth/login", loginData 
          );
          getLoggedIn();

          history.push('/');
        } catch (error) {
          console.log(error);
        }
      }
    return (
        <>
            <h1>Login</h1>
      <form onSubmit={login}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
        </>
    )
}

export default Login
