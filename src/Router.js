import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Customer from "./components/Customer";
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {loggedIn === false && (
            <>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </>
          )}
          {loggedIn === true && (
            <>
              <Route path="/customer">
                <Customer />
              </Route>
              <Route path="/logout">
                <Logout />
              </Route>
            </>
          )}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
