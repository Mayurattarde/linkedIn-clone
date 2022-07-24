import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log relts (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



/* import { connect } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { getUserAuth } from "./actions";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/">
           <Login />
         </Route>
         <Route path="/home">
           <Header />
           <Home />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{};
}


const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
*/

