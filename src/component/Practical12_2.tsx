
import { withTrackingHoc } from "../utils/Pr12_withTracking"

const Practical12_2 = (props) => {
    return (
        <>
            <div>Practical12_TrackingHOC</div>
            <h1>Page Views: {props.data}</h1>
        </>
    )
}
export default withTrackingHoc(Practical12_2)
