import React, {Component} from "react";
import App from "./App";
import axios from "axios"

type Props = {}

const API_URL = "http://localhost:8000/"
export {API_URL};
export default class Global extends Component<Props, GlobalState> {
    state: GlobalState = {
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false,
        value: "",
        isLoading: true
    }

    constructor(props: Props) {
        super(props)
    }

    setGlobalState = (state: object) => {
        this.setState(state)
        return this.state;
    }

    async componentDidMount() {
        let {data: value} = await axios.get(API_URL + "get.php");

        this.setState({value, isLoading: false})
    }

    render() {
        const {isLoading} = this.state;
        if (isLoading === true) {
            return null;
        }
        return (
            <App setGlobalState={this.setGlobalState} globalState={this.state}/>
        )
    }
}

