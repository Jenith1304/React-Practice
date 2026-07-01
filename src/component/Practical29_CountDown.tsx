import { useEffect, useRef, useState } from "react";

const useCountDown = (time: number) => {
    const [timeLeft, setTimeLeft] = useState(time)
    const [isRunning, setIsRunning] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    useEffect(() => {
        return (() => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
        })
    }, [])
    const timerRef = useRef<number | null>(null)
    const start = () => {
        setIsRunning(true)
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setIsRunning(false)
                    setIsFinished(true)
                    if (timerRef.current) {
                        clearInterval(timerRef.current)
                    }

                }
                else {
                    setTimeLeft(prev - 1)
                }
            })
        }, 1000)
    }

    const pause = () => {
        setIsRunning(false)
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
    }

    const resume = () => {
        setIsRunning(true)
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setIsRunning(false)
                    setIsFinished(true)
                    if (timerRef.current) {
                        clearInterval(timerRef.current)
                    }
                }
                else {
                    setTimeLeft(prev - 1)
                }
            })
        }, 1000)
    }

    const reset = () => {
        setIsRunning(false)
        setIsFinished(false)
        setTimeLeft(time)
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
    }


    return { timeLeft, isRunning, isFinished, start, pause, resume, reset };
}

export default function CountDown() {
    const { timeLeft, isRunning, isFinished, start, pause, resume, reset } =
        useCountDown(10);
    return (
        <div style={styles.container}>
            <h1 style={styles.timer}>
                {timeLeft}s {isFinished ? "⏰ Done!" : ""}
            </h1>
            <div style={styles.buttons}>
                {!isRunning && timeLeft === 10 && (
                    <button onClick={start} style={styles.btn}>
                        Start
                    </button>
                )}
                {!isRunning && timeLeft > 0 && timeLeft < 10 && (
                    <button onClick={resume} style={styles.btn}>
                        Resume
                    </button>
                )}
                {isRunning && (
                    <button onClick={pause} style={styles.btn}>
                        Pause
                    </button>
                )}
                <button onClick={reset} style={styles.btn}>
                    Reset
                </button>
            </div>
        </div>
    );
}
const styles: Record<string, React.CSSProperties> = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "sans-serif",
    },
    timer: {
        fontSize: "48px",
        marginBottom: "20px",
    },
    buttons: {
        display: "flex",
        gap: "10px",
    },
    btn: {
        padding: "10px 16px",
        fontSize: "16px",
        cursor: "pointer",
    },
};