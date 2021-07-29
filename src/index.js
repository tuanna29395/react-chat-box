import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Header from "./components/Header";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";

ReactDOM.render(
  <BrowserRouter>
    <Header />
      <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Signin} />
          <Route exact path="/signup" component={SignUp} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
