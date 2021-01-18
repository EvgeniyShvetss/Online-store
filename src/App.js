import React from "react"
import { Route } from "react-router-dom"
import "./App.css"
import "antd/dist/antd.css"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import ROUTER from "./router"

const App = () => (
  <div className="App">
    <Route exact path={["/", "/login", "/register"]} component={Auth} />
    <Route exact path={`/${ROUTER.HOME}`} component={Home} />
  </div>
)

export default App
