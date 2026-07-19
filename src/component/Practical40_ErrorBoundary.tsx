import { Component, useState, type ErrorInfo, type ReactNode } from "react";

function Profile({ userId }) {
    const [isSet, setIsSet] = useState(false)
    if (isSet) {
        throw new Error("This is error")
    }
    return <button onClick={() => setIsSet(true)}>Trigger Error</button>;
}





type PropsType = {
    fallback: ReactNode,
    children: ReactNode
}

type StateType = {
    hasError: boolean
}
class ErrorBoundary extends Component<PropsType, StateType> {

    constructor(props: PropsType) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error.message)
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback
        }
        return this.props.children
    }

}

import React from 'react'

const Practical40_ErrorBoundary = () => {
    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <Profile userId={1} />
        </ErrorBoundary>
    )
}

export default Practical40_ErrorBoundary