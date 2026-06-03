import { withAuthHoc } from "../utils/Pr9_AuthHoc"

const Practical9_AuthHOC = () => {
    return (
        <div>Dashboard Welcome back to your dashboard!</div>
    )
}

export default withAuthHoc(Practical9_AuthHOC)