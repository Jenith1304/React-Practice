// 4. Analytics Tracking HOC
// Problem Statement


// Create:

// withTracking(ProductPage)

// Requirements:

// Track:

// page views
// button clicks
// session duration

// Real World:

// Google Analytics style tracking.

// Usage:

// const TrackedPage = withTracking(ProductPage);

import { withTrackingHoc } from "../utils/Pr12_withTracking"

const Practical12_TrackingHOC = (props) => {
    return (
        <>
            <div>Practical12_TrackingHOC</div>
            <h1>Page Views: {props.data}</h1>
        </>
    )
}
export default withTrackingHoc(Practical12_TrackingHOC)

