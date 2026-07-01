import React, { useState } from 'react'
import Toast from './Toast'

export type Toast = {
    id: string,
    title: string,
    visible: boolean,
    timer: number
}
const Pr21_Toast = () => {
    const [isVisible, setIsvisible] = useState(false)
    const [toasts, setToasts] = useState<Toast[]>([])

    const addToast = () => {
        const newToast = {
            id: crypto.randomUUID(),
            title: "Toast" + String(Math.floor(Math.random() * 2)),
            visible: true,
            timer: 10
        }
        setToasts([newToast, ...toasts])
        console.log(toasts)
    }

    function onClose(id: string) {
        setToasts((prev) =>
            prev.filter((toast) => toast.id !== id)
        );
    }

    return (
        <div>
            <button onClick={addToast}>Show TOast</button>
            {/* <div >
                {isVisible && <Toast />}
            </div> */}
            {
                toasts.map((toast) => (
                    (<Toast key={toast.id}  {...toast} onClose={onClose} />)
                ))
            }
        </div>
    )
}

export default Pr21_Toast