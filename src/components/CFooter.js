import React from 'react'
import '../styles/CFooter.css'

export const CFooter = ({ weather, temp, children }) => {
    let date = new Date()

    return (
        <div>
            <h5>Programowanie JavaScript przykładowy serwis React. Dzisiaj mamy: {date.toString()}</h5>
            <br />
            Stan pogody: {weather}, temperatura: {temp}
            <br />
            {children}
        </div>
    )
}
