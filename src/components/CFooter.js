import React from 'react'

const CFooter = () => {
    let date = new Date()

    return (
        <div>
            <h5>Programowanie JavaScript przykładowy serwis React. Dzisiaj mamy: {date.toString()}</h5>
        </div>
    )
}

export default CFooter
