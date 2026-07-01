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
import Login from "./component/Practical17_Authentication"
import { Practical18_Accordion } from "./component/Practical18_Accordion"
import { Pr19_ErrorBoundary } from "./component/Pr19_ErrorBoundary"
import ErrorBoundary from "./component/ErrorBoundary"
import Tooltip from "./component/Pr20_ToolTip"
import { Pagination } from "./component/Pagination"
import Pr21_Toast from "./component/Pr21_Toast"
import { Throttle } from "./component/Pr22_useThrottle"
import { Optimistic } from "./component/Pr23_Optimistic"
import Pr24_SyncExternalStore from "./component/Pr24_SyncExternalStore"
import SyncExternalStore from "./component/Pr24_SyncExternalStore"
import Pr25_ModalRenderProps from "./component/Pr25_ModalRenderProps"
import { Pr26_HOC } from "./component/Pr26_HOC"
import { AccordionDemo } from "./component/Pr27_AccordionCompound"
import { UserListWithConfirmation } from "./utils/Practical15_withConfirmation"
import { Practical16_usePagination } from "./utils/Practical16_usePagination"
import CountDown from "./component/Practical29_CountDown"
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
      {/* <CartProvider>
        <Practical16CartDemo />
      </CartProvider> */}
      {/* <Login /> */}
      {/* <Practical18_Accordion /> */}
      {/* <ErrorBoundary>
        <Pr19_ErrorBoundary name="Jenith" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Pr19_ErrorBoundary name="Joker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Pr19_ErrorBoundary name="Jenith" />
      </ErrorBoundary> */}

      {/* <div style={{ padding: "100px" }}>
        <Tooltip text="Hello Tooltip">
          <button>Hover Me</button>
        </Tooltip>
      </div> */}

      {/* <Pagination/> */}
      {/* <Pr21_Toast /> */}
      {/* <Throttle/> */}
      {/* <Optimistic /> */}
      {/* <SyncExternalStore/> */}
      {/* <Pr25_ModalRenderProps /> */}
      {/* <Pr26_HOC /> */}
      {/* <AccordionDemo /> */}
      {/* <UserListWithConfirmation confirmAction={() => {console.log("Action confirmed!")}} /> */}
      {/* <Practical16_usePagination /> */}
      <CountDown />
    </>
  )
}
export default App