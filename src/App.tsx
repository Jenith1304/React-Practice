import Practical1 from "./component/Practical1"
import Practical2 from "./component/Practical2"
import Practical3 from "./component/Practical3"
import Practical5 from "./component/Practical5"
import Practical6 from "./component/Practical6"
import Practical7 from "./component/Practical7"
import Practical8 from "./component/Practical8"
import './App.css'
import Practical9_AuthHOC from "./component/Practical9_AuthHOC"
import Practical10_LoaderHOC from "./component/Practical10_LoaderHOC"
import Practical11_RBAC from "./component/Practical11_RBAC"
import Practical12_TrackingHOC from "./component/Practical12_TrackingHOC"
import Practical12_2 from "./component/Practical12_2"
import Practical13_ErrorBoundary from "./component/Practical13_ErrorBoundary"
import Practical14_MouseRenderProp from "./component/Practical14_MouseRenderProp"
import Practical15_WindowTracker from "./component/Practical15_WIndowTracker"
import { CartProvider } from "./context/CartContext"
import { Practical16CartDemo } from "./component/Practical16CartDemo"
function App() {
  return (
    <>

      {/* <Practical1/> */}
      {/* <Practical2/> */}
      {/* <Practical3/> */}
      {/* <Practical5 /> */}
      {/* <Practical6 /> */}
      {/* <Practical7 /> */}
      {/* <Practical8/> */}
      {/* <Practical9_AuthHOC/> */}
      {/* <Practical10_LoaderHOC /> */}
      {/* <Practical11_RBAC /> */}
      {/* <Practical12_TrackingHOC />
      <Practical12_2 />
      <Practical12_2 />
      <Practical12_2 /> */}
      {/* <Practical13_ErrorBoundary /> */}
      {/* <Practical14_MouseRenderProp /> */}
      {/* <Practical15_WindowTracker /> */}
      <CartProvider>
        <Practical16CartDemo />
      </CartProvider>
    </>
  )
}
export default App