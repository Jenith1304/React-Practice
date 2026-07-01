import React, { useEffect, useRef, useState } from "react";


const useThrottle = (callback, delay) => {
    const lastExecuted = useRef(0);

    return (...args) => {
        const now = Date.now();

        if (now - lastExecuted.current >= delay) {
            lastExecuted.current = now;
            callback(...args);
        }
    };
};


export const Throttle = () => {
    const [pos, setPos] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    function handleResize() {
        setPos({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    const throttledResize = useThrottle(handleResize, 5000);

    useEffect(() => {
        window.addEventListener("resize", throttledResize);

        return () => {
            window.removeEventListener("resize", throttledResize);
        };
    }, [throttledResize]);

    return (
        <div>
            <h1>Size</h1>
            <p>{pos.width} X {pos.height}</p>
        </div>
    );
}