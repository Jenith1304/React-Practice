export const withRoleHOC=(WrappedComponent,requiredRole)=>{
    return function WithRole(props){
        const userRole="admin"; // Simulating a user role
        if(userRole!==requiredRole){
            return <p>Access Denied. You do not have the required role.</p>
        }
        else
        {
            return <WrappedComponent {...props} />
        }
    }

}