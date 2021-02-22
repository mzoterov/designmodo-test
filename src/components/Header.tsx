import React, {Component} from "react";
import axios from "axios"
import {API_URL} from "../Global"

type P = {
    setGlobalState: (state: object) => GlobalState
    globalState: GlobalState
};
type S = {}

export default class Header extends Component<P, S> {
    constructor(props: P) {
        super(props);
    }

    save = async () => {
        let val = document.getElementById('textarea').innerHTML
        let {data: value} = await axios.post(API_URL + "update.php", JSON.stringify({"text": val}));

        this.props.setGlobalState({value});
    }

    bold = async () => {
        await document.execCommand("bold");
        let value = document.getElementById('textarea').innerHTML
        this.props.setGlobalState({value});
    }

    italic = async () => {
        await document.execCommand("italic");
        let value = document.getElementById('textarea').innerHTML
        this.props.setGlobalState({value});
    }

    underline = async () => {
        await document.execCommand("underline");
        let value = document.getElementById('textarea').innerHTML
        this.props.setGlobalState({value});
    }

    strikethrough = async () => {
        await document.execCommand("strikethrough");
        let value = document.getElementById('textarea').innerHTML
        this.props.setGlobalState({value});
    }

    render() {
        const {globalState} = this.props
        return (
            <header className="header">
                <div>
                    <button onClick={this.save} className="header__button">Save</button>
                </div>
                <div className="header__container">
                    <button onClick={this.bold}
                            className={globalState.bold ? "header__icon header__bold active" : "header__icon header__bold"}>B
                    </button>
                    <button onClick={this.italic}
                            className={globalState.italic ? "header__icon header__italic active" : "header__icon header__italic"}>I
                    </button>
                    <button onClick={this.underline}
                            className={globalState.underline ? "header__icon header__underline active" : "header__icon header__underline"}>U
                    </button>
                    <button onClick={this.strikethrough}
                            className={globalState.strikethrough ? "header__icon header__through active" : "header__icon header__through"}>S
                    </button>
                </div>
            </header>
        )
    }
}