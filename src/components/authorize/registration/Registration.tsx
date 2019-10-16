import React from "react";
import './registration.css';

export default class Registration extends React.Component {
    public render() {
        return (
            <div id="container1">
                <form>
                    <label>Username:</label>
                    <input type="text"/>
                    <label>Password:</label>
                    <input type="password"/>
                    <label>Confirm password:</label>
                    <input type="password"/>
                    <div id="login" className="login">
                        <button className="button" style={{verticalAlign:"middle"}}>
                            <span>Register</span>
                        </button>
                    </div>
                     </form>
            </div>
        );
    }
}