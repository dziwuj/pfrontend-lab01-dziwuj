import React, { Component } from 'react'

export default class CContents extends Component {
    constructor() {
        super()
        this.state = { msg: 'Witaj użytkowniku. Kliknij przycisk, aby otrzyamć wiadomość' }
    }

    changeMsg = () => {
        this.setState({ msg: 'Dziękuję za kliknięcie' })
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.changeMsg()}>Kliknij mnie</button>
            </div>
        )
    }
}
