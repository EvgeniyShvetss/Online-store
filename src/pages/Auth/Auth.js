import React from "react"
import { Route, Switch } from "react-router-dom"
import RegisterForm from "../../components/RegisterForm"
import LoginForm from "../../components/LoginForm"
import "./Auth.scss"
import ROUTER from "../../router"

const Auth = () => (
  <div className="auth">
    <div className="auth__content">
      <Switch>
        <Route exact path={`/${ROUTER.REGISTER}`} component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </div>
  </div>
)

export default Auth
