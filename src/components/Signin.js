import React from "react";
import Header from "./Header";
import SigninForm from "./SigninForm";

export default class Signin extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <SigninForm/>
            </div>
        )
    }
}