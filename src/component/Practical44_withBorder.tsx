// const FancyInput = withBorder(Input);

// function App() {
//   const ref = useRef<HTMLInputElement>(null);

//   return (
//     <>
//       <FancyInput ref={ref} />
//       <button onClick={() => ref.current?.focus()}>
//         Focus
//       </button>
//     </>
//   );
// }
// Requirements

// withBorder

// wraps the component
// adds a styled border around it
// must not break ref forwarding

// The parent should still receive the real input element

import React, { Component, useRef, type ComponentType, type RefObject } from 'react'

const Practical44_withBorder = () => {
    const ref = useRef<HTMLInputElement | null>(null)
    return (

        <>
            <FancyInput ref={ref} />
            <button onClick={() => ref.current?.focus()}>
                Focus
            </button>
        </>
    )

}

export default Practical44_withBorder

const withBorder = <T extends object>(Component: ComponentType<T>) => {
    return function WrappedComponent(props: T & { ref: RefObject<HTMLInputElement | null> }) {
        const { ref, ...otherProps } = props
        return <Component ref={props.ref} {...otherProps as T} />
    }
}

const Input = ({ ref }: { ref: RefObject<HTMLInputElement | null> }) => {
    return <input type='text' ref={ref} />
}

const FancyInput = withBorder(Input);

