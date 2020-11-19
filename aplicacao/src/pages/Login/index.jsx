import React from "react";
import "./styles.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";


import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

const Login = () => {
  return (
    <>
      <Switch>
        <Route exact path="" component={LoginForm} />
        <Route exact path="/criar" component={LoginCreate} />
        {/* <Route exact path="/perdeu"  component={LoginPasswordLost}/>
          <Route exact path="/resetar"  component={LoginPasswordReset}/> */}
      </Switch>
    </>
  );
};

export default Login;
