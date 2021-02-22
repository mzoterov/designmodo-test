import React, {Component} from 'react';

import './Colors.css';
import './App.css';
import TextArea from "./components/TextArea";
import Header from "./components/Header";

type P = {
    globalState: GlobalState,
    setGlobalState: (state: object) => GlobalState
};
type S = {
    /*
    selection: Range | null,
    hide: boolean,
    pS: number,
    pW: number,
    pE: number,
     */
};

/*

    bold() {
        const {pS, pE,value} = this.state;

        let original = value;
        let fragment = value.substring(pS, pE);
        let text = `<strong>${fragment}</strong>`;
        let final = original.replace(fragment, text);
        console.log(value, fragment, text, final)
        this.setState({value: final})
    }

 */
function saveSelection() {
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            return sel.getRangeAt(0);
        }
    }
    return null;
}

function restoreSelection(range) {
    if (range) {
        if (window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}


export default class App extends Component<P, S> {
    constructor(props: P) {
        super(props)
        this.state = {
            pS: 0,
            selection: null,
            bold: false,
            hide: true,
            pW: 210,
            italic: false,
            underline: false,
            strikethrough: false,
            pE: 0,
            value: `<b>Elizabeth</b> Raffald (1733–1781) was <strike>an English</strike> author, <u>innovator</u> and <i>entrepreneur</i>. Born and raised in Doncaster, Yorkshire, Raffald went into domestic service for fifteen years, ending as the housekeeper to the Warburton baronets at Arley Hall, Cheshire. She moved with her husband to Manchester, where she opened a register office to introduce domestic workers to employers; she also ran a cookery school and sold food from the premises. In 1769 she published her cookery book The Experienced English Housekeeper, which contains the first recipe for a "Bride Cake" that is recognisable as a modern wedding cake. She is possibly the inventor of the Eccles cake. In August 1772 Raffald published The Manchester Directory, a listing of 1,505 traders and civic leaders in Manchester—the first such listing for the up-and-coming town. Her recipes were plagiarised by other authors, notably by Isabella Beeton in her bestselling Mrs Beeton's Book of Household Management (1861).`
        }

    }


    render() {
        /*
        TODO:
        <Popout
                            id="popup"
                            width={this.state.pW}
                            left={this.state.pS} top={this.state.pE}
                            hide={this.state.hide}
                            bold={this.state.bold}
                            italic={this.state.italic}
                            underline={this.state.underline}
                            strikethrough={this.state.strikethrough}
                            setBold={this.bold}
                            setItalic={this.italic}
                            setUnderline={this.underline}
                            setStrikethrough={this.strikethrough}
                        />

         */


        return (
            <React.Fragment>
                <Header globalState={this.props.globalState} setGlobalState={this.props.setGlobalState}/>
                <TextArea globalState={this.props.globalState} setGlobalState={this.props.setGlobalState}/>
            </React.Fragment>
        )
    }

}

