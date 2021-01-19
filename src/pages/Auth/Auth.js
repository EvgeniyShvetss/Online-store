import React from "react"
import { Route, Switch } from "react-router-dom"
import RegisterForm from "../../components/RegisterForm/RegisterForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import "./Auth.scss"
import ROUTERS from "../../router"

const Auth = () => (
  <div className="auth">
    <div className="auth__content">
      <Switch>
        <Route exact path={ROUTERS.LOGIN} component={LoginForm} />
        <Route exact path={ROUTERS.REGISTER} component={RegisterForm} />
      </Switch>
    </div>
  </div>
)

export default Auth
