import React, { Component } from 'react'
import logo from '../logo.svg'
import '../styles/CHeader.css'

export default class CHeader extends Component {
    render() {
        return (
            <div className="headerContainer">
                <img src={logo} alt="logo" className="headerLogo"></img>
                <h2>Witaj w przykładowym serwisie {this.props.aName + ' ' + this.props.aFamily}</h2>
            </div>
        )
    }
}
