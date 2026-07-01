// 9. Authentication System
// Hooks
// useContext
// useReducer
// useEffect
// Problem Statement

// Build:

// login/logout
// protected routes
// token persistence
// role-based rendering
// Real World Mapping

// Every SaaS product.

// Concepts
// Global state
// Auth lifecycle
// App-wide context

//login page

const Login = () => {
    
    return (
        <div className="mx-auto w-1/5 border rounded-lg p-2">
            <h1 className="text-center">Login</h1>
            <form className="mt-2">
                <input type="text" placeholder="Username" className="border p-2 w-full mb-4" />
                <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
            </form>
        </div>
    )
}

export default Login