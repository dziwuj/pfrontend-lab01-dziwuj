import React, { Component } from 'react'
import jsonData from '../res/text.json'
import '../styles/CContents.css'

export default class CContents extends Component {
    constructor() {
        super()
        this.state = { msg: 'Witaj użytkowniku. Kliknij przycisk, aby otrzyamć wiadomość' }
        this.txtData = () => JSON.parse(JSON.stringify(jsonData))
    }

    changeMsg = () => {
        this.setState({ msg: 'Dziękuję za kliknięcie' })
    }
    render() {
        const items = []
        for (let i = 0; i < this.txtData().count; i++) {
            let value = this.txtData().text[i]
            items.push(
                <div key={i} id={`"div${1 + i}"`} className="contentsFlex">
                    <img className="contentsFlexImg" src={'/img/img' + (i + 1) + '.png'} alt=""></img>
                    <p className="contentsFlexText">{value}</p>
                </div>
            )
        }

        return (
            <div className="backgroundDivClass">
                <div className="contentDivClass">{items}</div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.changeMsg()}>Kliknij mnie</button>
            </div>
        )
    }
}
