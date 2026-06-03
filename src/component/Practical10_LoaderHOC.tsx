import { withAuthLoader } from "../utils/Pr10_withLoader"
const Practical10_LoaderHOC = () => {
    return (
        <>
            <div>Practical10_LoaderHOC</div>
            <h1>lists</h1>
        </>
    )
}
export default withAuthLoader(Practical10_LoaderHOC)

