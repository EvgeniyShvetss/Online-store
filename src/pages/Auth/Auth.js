import React from "react"
import { Route, Switch } from "react-router-dom"
import RegisterForm from "../../components/RegisterForm/RegisterForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import "./Auth.scss"

const Auth = () => (
  <div className="auth">
    <div className="auth__content">
      <Switch>
        <Route exact path={["/", "/login"]} component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    </div>
  </div>
)

export default Auth
