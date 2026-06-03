// 5. Error Boundary HOC
// Problem Statement

import { withErrorBoundaryHOC } from "../utils/Pr13_withErrorBoundaryHOC"

// Create:

// withErrorBoundary(Component)

// Requirements:

// If component crashes:

// Something went wrong

// instead of entire app crashing.

// Real World:

// Production applications
// Monitoring systems


const Practical13_ErrorBoundary = () => {
    throw new Error("Oops!");
    return (
        <div>Practical13_ErrorBoundary</div>
    )
}

export default withErrorBoundaryHOC(Practical13_ErrorBoundary)