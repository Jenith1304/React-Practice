import { withRoleHOC } from "../utils/Pr11_withRole"

const Practical11_RBAC = () => {
    return (
        <>
            <div>Practical11_RBAC</div>
            <h1>Welcome to the admin panel!</h1>
        </>
    )
}

export default withRoleHOC(Practical11_RBAC, "user")