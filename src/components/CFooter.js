import React from 'react'

export const CFooter = () => {
    let date = new Date()

    return (
        <div>
            <h5>
                Prog. JS, przykładowy serwis React. Dzisiaj mamy: {'  '}
                {date.toString()}
            </h5>
        </div>
    )
}
