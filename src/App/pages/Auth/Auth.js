import React from "react"
import { Route, Switch } from "react-router-dom"
import RegisterForm from "../../Components/RegisterForm/RegisterForm"
import LoginForm from "../../Components/LoginForm/LoginForm"
import "./Auth.scss"

const Auth = () => (
  <div className="auth">
    <div className="auth__content">
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/" component={LoginForm} />
      </Switch>
    </div>
  </div>
)

export default Auth
