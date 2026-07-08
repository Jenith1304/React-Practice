import React, { useState, type ReactElement, type ReactNode } from 'react'
// type PropsType = {
//     trigger: (setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => ReactNode
//     children: ReactNode
// }

// const Popover = ({ trigger, children }: PropsType) => {
//     const [isOpen, setIsOpen] = useState(false)
//     return <>
//         {trigger(setIsOpen)}
//         {isOpen && children}
//     </>

// }


type PropsType2 = {
    trigger: ReactElement,
    children: ReactNode,
}

const Popover = ({ trigger, children }: PropsType2) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen((prev) => !prev)
    }
    const clonedTrigger = React.cloneElement(trigger, { onClick: handleToggle })
    console.log(clonedTrigger)
    return <>
        {clonedTrigger}
        {isOpen && children}
    </>
}

const Practical31_PopOver = () => {
    return (
        <div style={{ padding: 40 }}>
            <Popover
                // trigger={(setIsOpen) => <button onClick={() => setIsOpen((prev) => !prev)}>Open actions</button >}
                trigger={<button>Open actions</button>}
            >
                <div style={{ display: "grid", gap: 8 }}>
                    <button onClick={() => alert("Edit clicked")}>
                        Edit
                    </button>
                    <button onClick={() => alert("Delete clicked")}>
                        Delete
                    </button>
                </div>
            </Popover >
        </div >

    )

}

export default Practical31_PopOver          