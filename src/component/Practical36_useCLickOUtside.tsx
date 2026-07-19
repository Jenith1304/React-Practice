import React, { useEffect, useRef, useState } from 'react'

// const { isOpen, open, close, toggle, ref } = useClickOutside(true);

// // usage
// <div ref={ref}>
//   {isOpen && <DropdownMenu />}
// </div>


function useClickOutside(initialValue: boolean) {
    const [isOpen, setIsOpen] = useState(initialValue)
    const ref = useRef<HTMLDivElement | null>(null)

    function open() {
        setIsOpen(true)
    }
    function close() {
        console.log("CLosed")
        setIsOpen(false)
    }

    function toggle() {
        console.log("hhhh")
        setIsOpen((prev) => !prev)
    }


    useEffect(() => {

        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                close()
            }
        }

        document.addEventListener("mousedown", handleClick)

        return (() => document.removeEventListener("mousedown", handleClick))
    }, [])

    return {
        isOpen, open, close, toggle, ref
    }
}

const Practical36_useCLickOUtside = () => {
    const { isOpen, open, close, toggle, ref } = useClickOutside(true);

    return (
        <div>Practical36_useCLickOUtside

            <button onClick={toggle}>toggle</button>
            <div ref={ref}>
                {isOpen && <div>Inner DIvs</div>}
            </div>
        </div>
    )
}

export default Practical36_useCLickOUtside