import { createContext } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,initialState)
    
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}