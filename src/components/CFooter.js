import React from 'react'
import '../styles/CFooter.css'

export const CFooter = () => {
    let date = new Date()
    return React.createElement(
        'div',
        { className: 'footerDivClass' },
        React.createElement(
            'h5',
            { id: 'footerText', className: 'footerTextClass' },
            'Prog. JS, przykładowy serwis React. Dzisiaj mamy: ' + date.toLocaleDateString('pl-PL')
        )
    )
}
