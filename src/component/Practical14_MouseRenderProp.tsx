// 1. Mouse Tracker

import { MouseTracker } from "../utils/Practical14_renderMouseTracker"

// Classic React Example

// Problem Statement

// Track cursor position.

// Component:

// <MouseTracker
//  render={(position) => (
//    <div>
//       X:{position.x}
//       Y:{position.y}
//    </div>
//  )}
// />

// Real World:

// Drawing apps
// Canvas apps
// Games

const Practical14_MouseRenderProp = () => {
    return (
        <>
            <div>Practical14_MouseRenderProp</div>
            <MouseTracker render={(position) => (<div>X: {position.x}, Y: {position.y}</div>)} />
        </>
    )
}

export default Practical14_MouseRenderProp