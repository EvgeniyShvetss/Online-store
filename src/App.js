import React from "react"
import { Route } from "react-router-dom"
import "./App.css"
import "antd/dist/antd.css"
import Auth from "./pages/Auth"

const App = () => (
  <div className="App">
    <Route exact path={["/", "login", "/register"]} component={Auth} />
  </div>
)

export default App
