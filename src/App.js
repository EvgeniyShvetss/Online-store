import React from "react"
import { Route } from "react-router-dom"
import "./App.css"
import "antd/dist/antd.css"
import Auth from "./pages/Auth/Auth"
import Home from "./pages/Home"

const App = () => (
  <div className="App">
    <Route exact path={["/", "login", "/register"]} component={Auth} />
    <Route exact path="/home" component={Home} />
  </div>
)

export default App
