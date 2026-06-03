// 2. Window Size Tracker
// Problem Statement

import { WindowSizeTracker } from "../utils/Pr15_renderWindowSizeTracker"

// Create:

// <WindowSize>
//  {({width,height}) => (
//    ...
//  )}
// </WindowSize>

// Real World:

// Responsive dashboards

const Practical15_WindowTracker = () => {
    return (
        <>
            <WindowSizeTracker render={({ width, height }) => (
                <div>
                    <p>Width: {width}</p>
                    <p>Height: {height}</p>
                </div>
            )} />
        </>
    )
}
export default Practical15_WindowTracker