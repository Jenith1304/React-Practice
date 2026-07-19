import type { ReactNode } from "react"

{/* <Modal open={open} onClose={() => setOpen(false)}>
  <div className="dialog">
    Hello World
  </div>
</Modal>
Requirements

The modal should

always appear above every page element
work correctly even if its parent has
overflow: hidden;

or

transform: translate(...)

Pressing Escape should close it.

Clicking the backdrop should close it.

Clicking inside the dialog should not close it. */}

type ModalProps = {
    open: boolean,
    onClose: () => void,
    children: ReactNode
}
const useClickOutside = (ref: React.RefObject<HTMLDivElement | null>, cb: () => void) => {

    useEffect(() => {
        function handleMouseDown(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                console.log("Yes")
                cb()
            }
        }

        document.addEventListener("mousedown", handleMouseDown)
    }, [])
}

const Modal = ({ open, onClose, children }: ModalProps) => {

    const ref = useRef<HTMLDivElement | null>(null)
    useClickOutside(ref, onClose)
    return <>{open && createPortal(<div ref={ref} style={{ height: "250px", width: "250px", background: "red" }}>{children}</div>, document.body)}</>
}

import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from "react-dom"

const Practical46_Modal = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button onClick={() => setOpen(true)}>Open Modal</button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="dialog" style={{ height: "250px", width: "250px", background: "red" }}>
                    Hello World
                </div>
            </Modal>
        </>
    )
}

export default Practical46_Modal