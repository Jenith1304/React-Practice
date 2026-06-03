import { useEffect, useState } from "react"

export const WindowSizeTracker = ({ render }) => {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })
    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);

        // Cleanup when component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div style={{ height: '100vh' }} >
            {render(size)}
        </div>
    )
}