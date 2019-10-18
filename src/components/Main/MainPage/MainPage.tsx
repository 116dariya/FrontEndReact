import React from "react";
import {Last} from "../Last/Last";
import {Popular} from "../Popular/Popular";

export class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Popular/>
                <Last/>
            </div>
        );
    }
}