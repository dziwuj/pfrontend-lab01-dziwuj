import React, { Component } from 'react'
import logo from '../logo.svg'

export default class CHeader extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="logo" className="headerLogo"></img>
                <h2>Witaj w przykładowym serwisie</h2>
            </div>
        )
    }
}
