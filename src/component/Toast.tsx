import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Toast } from './Pr21_Toast'

const Toast = ({ id, title, visible, timer, onClose }: Toast & { onClose: (id: string) => void }) => {

    const [time, setTime] = useState(timer)
    const timerRef = useRef(0)

    useEffect(() => {
        timerRef.current = setInterval(() => {
            if (time > 0) {
                setTime((prev) => prev - 1)
            }
            else {
                onClose(id)
                setTime(0)
            }
        }, 1000)
        return () => {
            clearInterval(timerRef.current)
            timerRef.current = 0
        }
    })

    return createPortal(
        <div style={{ background: "gray", margin: "5px 2px", width: "70px" }}>Im Toast {time}</div>, document.body
    )
}

export default Toast