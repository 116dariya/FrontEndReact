import React from "react";
import './import.css'

export default class Login extends React.Component {
    render() {
        return (
            <div id="container">
                <form>
                    <label>Username:</label>
                        <input type="text"/>
                        <label>Password:</label>
                        <input type="password"/>
                    <div id="login" className="login">
                        <button className="button" style={{verticalAlign:"middle"}}>
                            <span>Login</span>
                        </button>
                    </div>
                 </form>
            </div>
        );
    }
}