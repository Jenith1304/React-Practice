import React from 'react'

export const Pr19_ErrorBoundary = ({ name }) => {
    if (name == "Joker") {
        throw new Error("Joker in the component")
    }
    return (
        <div>
            <h1>Error Boundary</h1>
            <p>{name}</p>
        </div>
    )
}
