import React from "react";
import "./header.css";
// import scroll from "./scroll.js";

export default class Header extends React.Component {
    public render() {
        return (
            <div>
                <nav className="scrolled">
                    <a href="/">
                        <div className="logo"/>
                    </a>
                    <ul>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Registration</a></li>
                    </ul>
                </nav>
                <header>
                    <div className="headline">
                        <div className="inner">
                            <h1>Hello</h1>
                            <p>Scroll down the page</p>
                        </div>
                    </div>
                </header>
            </div>
        );
            {/*<div className="topnav">*/}
            {/*    <div className="nav-cont">*/}
            {/*        <a id="index" className="active" href="">Home</a>*/}
            {/*        <a id="login" href="login/">Login</a>*/}
            {/*        <a id="register" href="register/">Register</a>*/}
            {/*    </div>*/}
            {/*</div>*/}

    }
}