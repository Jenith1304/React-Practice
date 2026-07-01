import React, { useState, type JSX, type ReactElement, type ReactNode } from 'react'

const ModalRenderLogic = ({ render }: { render: () => JSX.Element }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}> {isOpen ? "close" : "open"}</button>
            {isOpen && render(isOpen)}
        </div>
    )
}

export default ModalRenderLogic