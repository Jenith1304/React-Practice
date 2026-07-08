import React, { useEffect, useState, type ReactNode } from 'react'

type PropsType = {
    minWidth: number,
    minHeight: number,
    fallback: ReactNode,
    children: ReactNode
}
function WindowResizeObserver({ minHeight, minWidth, fallback, children }: PropsType) {
    const [dimension, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight })
    useEffect(() => {
        function handleResize() {
            setDimension({ width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener("resize", handleResize)
        return (() => window.removeEventListener("resize", handleResize))
    }, [])

    if (dimension.width < minWidth || dimension.height < minHeight) return fallback

    else return children

}

const Practical33_WIndowResizeObserver = () => {
    return (
        <WindowResizeObserver
            minWidth={200}
            minHeight={200}
            fallback={<div>Too small to render</div>}
        >
            < h1>Hello</h1>
        </WindowResizeObserver>
    )
}

export default Practical33_WIndowResizeObserver