import logo from './logo.svg';
import './App.css';
import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import Header from "./components/Header";

class App extends React.Component {
    render() {
        return (

            <Header/>
        )
    }
}

export default App;
