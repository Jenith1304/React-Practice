// const EnhancedButton = withLoading(Button);

// function App() {
//   return (
//     <EnhancedButton
//       loading
//       onClick={save}
//     >
//       Save
//     </EnhancedButton>
//   );
// }

// Requirements

// When loading is true,

// disable the button
// replace its content with
// Loading...

// When loading becomes false,

// the original button should behave normally.

// The wrapped component should receive every prop except loading.

import React, { type ButtonHTMLAttributes, type ComponentType } from 'react'

const Practical43_withLoading = () => {
    return (
        <EnhancedButton
            // loading
            onClick={() => { console.log("Saved") }}
        >
            Save
        </EnhancedButton>
    )
}

export default Practical43_withLoading

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button {...props}>{props.children}</button>
}

const withLoading = <T extends object>(Component: ComponentType<T>) => {
    return function WrappedComponent(props: T & { loading?: true }) {
        const { loading, ...otherProps } = props
        if (loading) return <p>Loading.....</p>
        return <Component {...(otherProps as T)} />
    }
}

const EnhancedButton = withLoading(Button)
