import React, {Component} from "react";
import styled from 'styled-components'

type P = {
    id: string,
    width: number,
    left: number,
    top: number,
    hide?: boolean,
    bold: boolean,
    italic: boolean,
    underline: boolean,
    strikethrough: boolean,
    setBold: () => Promise<void>,
    setItalic: () => Promise<void>,
    setUnderline: () => Promise<void>,
    setStrikethrough: () => Promise<void>
}
type S = {}
type sc = { width: number, left: number, top: number, hide?: boolean }

const DComp = styled.div<sc>`
        position: absolute;
        left: ${props => props.left}px;
        top: ${props => props.top}px;
        margin-left: -75px;
        width: ${props => props.width}px;
        background: var(--popup_color);
        box-shadow: var(--popup_shadow);
        border-radius: 4px;
        height: 36px;
        pointer-events: all;
        align-items: center;
        padding-left: 12px;
          transform: translateX(-50%);
        font-size: 0.7em;
        display: ${props => props.hide ? `none` : `flex`};
        color: white;
        border-radius: 4px;
      `

const BContainer = styled.div`
    display: flex;
    
`
const BIcon = styled.button`
      width: 52px;
  height: 40px;
  background: none;
  color: var(--icon_color);
  font-size: 16px;
  line-height: 19px;
  text-align: center;
    border: 0;
  font-style: normal;
  font-family: Inter, serif;
  font-weight: 500;
  &:focus {
  outline: none;     
  }
`


export default class Popout extends Component<P, S> {
    constructor(props: P) {
        super(props);
    }

    highlight = () => {

    }

    render() {
        return (
            <div id={this.props.id}>
                <DComp id="popupContent" top={this.props.top} width={this.props.width} left={this.props.left}>
                    <BContainer>
                        <BIcon className={this.props.bold ? "header__bold active" : " header__bold"}
                               onClick={() => this.props.bold}>B</BIcon>
                        <BIcon className={this.props.italic ? "header__italic active" : " header__italic"}
                               onClick={() => this.props.italic}>I</BIcon>
                        <BIcon className={this.props.underline ? "header__underline active" : " header__underline"}
                               onClick={() => this.props.underline}>U</BIcon>
                        <BIcon className={this.props.strikethrough ? "header__through active" : " header__through"}
                               onClick={() => this.props.strikethrough}>S</BIcon>
                    </BContainer>
                </DComp>
            </div>

        )
    }

}