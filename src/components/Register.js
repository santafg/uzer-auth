import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = { email, password, passwordVerify };

      await axios.post("https://uzer-auth.herokuapp.com/auth/", registerData 
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Register a new account</h1>
      <form onSubmit={register}>
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
        <input
          type="password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
          placeholder="Confirm Password"
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
