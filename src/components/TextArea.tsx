import React, {Component} from "react";

type P = {
    setGlobalState: (state: object) => GlobalState
    globalState: GlobalState
};
type S = {}

export default class TextArea extends Component<P, S> {
    constructor(props: P) {
        super(props);
    }

    getPosition = async (el) => {
        if (el.closest("b") !== null) this.props.setGlobalState({bold: true});
        else this.props.setGlobalState({bold: false});

        if (el.closest("i") !== null) this.props.setGlobalState({italic: true});
        else this.props.setGlobalState({italic: false});

        if (el.closest("u") !== null) this.props.setGlobalState({underline: true});
        else this.props.setGlobalState({underline: false});

        if (el.closest("strike") !== null) this.props.setGlobalState({strikethrough: true});
        else this.props.setGlobalState({strikethrough: false});

        /*
        TODO:
        let pS = 0;
        let pE = 0;

        let selection = await document.getSelection();
        if (selection.rangeCount) {
            let range = selection.getRangeAt(0);
            let range2 = range.cloneRange()
            range2.selectNodeContents(el)
            const rects =  range.getBoundingClientRect();
            let left = (rects.left - ($('#popupContent').width()/2) + (rects.width/2))
            let top = rects.top - 42 || 0;
            pS = range.startOffset
            pE = range.endOffset
            if(pS === pE) {
                this.setState({ hide:true})
                return
            }
            let selectionSaved = await saveSelection();
            this.setState({selection:selectionSaved, pS: left, pE: top, hide:false})
        }
         */

    }
    eventHandler = async (e) => {
        await this.getPosition(e.target);
        return false;
    }

    componentDidMount() {
        let area = document.getElementById("textarea")
        area.addEventListener('click', this.eventHandler)
        area.addEventListener('keyup', this.eventHandler)
    }

    bold = async () => {
        await document.execCommand("bold");
        let val = document.getElementById('textarea').innerHTML
        this.props.setGlobalState({value: val});
    }

    italic = async () => {
        await document.execCommand("italic");
        let val = document.getElementById('textarea').innerHTML
        this.props.setGlobalState({value: val});
    }

    underline = async () => {
        await document.execCommand("underline");
        let val = document.getElementById('textarea').innerHTML
        this.props.setGlobalState({value: val});
    }

    strikethrough = async () => {
        await document.execCommand("strikethrough");
        let val = document.getElementById('textarea').innerHTML
        this.props.setGlobalState({value: val});
    }


    render() {
        return (
            <div className="main">
                <div className="container">
                    <div
                        dangerouslySetInnerHTML={{__html: this.props.globalState.value}}
                        id="textarea"
                        className="container_text"
                        placeholder='Type text'
                        contentEditable="true">
                    </div>
                </div>
            </div>
        )
    }
}