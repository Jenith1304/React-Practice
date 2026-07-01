import React, { useState, type ReactNode } from 'react'
import { AccordionContext } from './AccordionContext'

const AccordionProvider = ({ children }: { children: ReactNode }) => {
    const [index, setIndex] = useState<string | null>(null)
    return (
        <AccordionContext.Provider value={{ index, setIndex }} >
            {children}
        </AccordionContext.Provider>
    )
}

export default AccordionProvider