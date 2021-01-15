import React from "react"
import { Route, Switch } from "react-router-dom"
import RegisterForm from "../../components/RegisterForm"
import LoginForm from "../../components/LoginForm"
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
