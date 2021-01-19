import React from "react"
import { Route } from "react-router-dom"
import "./App.css"
import "antd/dist/antd.css"
import Auth from "./pages/Auth/Auth"
import Home from "./pages/Home"
import ROUTERS from "./router"

const App = () => (
  <div className="App">
    <Route
      exact
      path={[`${ROUTERS.LOGIN}`, `${ROUTERS.REGISTER}`]}
      component={Auth}
    />
    <Route exact path={ROUTERS.HOME} component={Home} />
  </div>
)

export default App
