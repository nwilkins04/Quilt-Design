import React, { Component } from "react";

import SignUp from "./SignUp.js";

class Login extends Component {

    render() {
        return (
            <button className="login" onClick={<SignUp/>}>
                Login Here
            </button>
        )
    }
}

export default Login;