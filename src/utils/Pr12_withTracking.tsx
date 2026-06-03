import { useEffect, useState } from "react";

let globalCount = 0;
export const withTrackingHoc = (WrappedComponent) => {
    return function withTracking(props) {
        const [count, setCount] = useState(0);
        useEffect(() => {
            globalCount += 1;
            setCount(globalCount);

        }, [])
        return <WrappedComponent {...props} data={count} />;
    }
}