// const EnhancedInput = withLogging(Input);

import { useRef, useState, type ComponentType, type RefObject } from "react"

// <EnhancedInput ref={inputRef} value="x" onChange={() => {}} />
// inputRef.current should be the actual <input> DOM node, not lost through the HOC

// function Input({ ref }: { ref: RefObject<HTMLInputElement | null> }) {
//     return <input type="text" ref={ref} />
// }

// type extraProps = {
//     ref: RefObject<HTMLInputElement | null>
//     value: string,
//     onChange: () => void
// }
// const withLogging = <T extends object>(Component: ComponentType<T>) => {
//     return function WrappedComponent(props: T & extraProps) {
//         console.log("Rendered")
//         return <Component  {...props} />
//     }
// }
// const EnhancedInput = withLogging(Input);

// import React from 'react'

// const Practical41_EnhancedInput = () => {
//     const inputRef = useRef<HTMLInputElement | null>(null)
//     console.log(EnhancedInput)
//     return (
//         <EnhancedInput ref={inputRef} value="x" onChange={() => { }} />
//     )
// }

// export default Practical41_EnhancedInput





///way 2

import { forwardRef } from "react";

type InputProps = {
    value: string;
    onChange: () => void;
};
  
const Input = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return <input ref={ref} {...props} />;
    }
);


function withLogging<P extends object>(
    Component: React.ComponentType<P>
) {
    return forwardRef<HTMLInputElement, P>((props, ref) => {
        console.log("Rendered");

        return (
            <Component
                {...props as P }
                ref={ref}
            />
        );
    });
}

const EnhancedInput = withLogging(Input);
import React from 'react'

const Practical41_EnhancedInput = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    console.log(EnhancedInput)
    return (
        <EnhancedInput ref={inputRef} value="x" onChange={() => { }} />
    )
}

export default Practical41_EnhancedInput
