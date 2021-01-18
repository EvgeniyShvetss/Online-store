import React from "react"
import ReactDOM from "react-dom"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { BrowserRouter as Router } from "react-router-dom"
import thunk from "redux-thunk"
import rootReducer from "./redux/reducers/rootReducer"
import App from "./App"

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
