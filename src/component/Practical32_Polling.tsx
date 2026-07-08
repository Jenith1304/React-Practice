import React, { useEffect, useRef, useState } from 'react'


function fetchUsers({ signal }: { signal: AbortSignal }) {
    return fetch("https://jsonplaceholder.typicode.com/users/1", {
        signal,
    }).then((response) => response.json());
}

function usePollingQuery<T>(
    fetchFn: ({ signal }: { signal: AbortSignal }) => Promise<T>,
    delay: number
) {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [paused, setPaused] = useState(false);

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (paused) {
            return;
        }

        let isFirstFetch = true;
        const controller = new AbortController();

        async function handleFetch() {
            try {
                if (isFirstFetch) {
                    setLoading(true);
                } else {
                    setUpdating(true);
                }

                const result = await fetchFn({
                    signal: controller.signal,
                });

                setData(result);
            } catch (err: any) {
                if (err.name !== "AbortError") {
                    console.error(err);
                }
            } finally {
                if (isFirstFetch) {
                    setLoading(false);
                    isFirstFetch = false;
                } else {
                    setUpdating(false);
                }
            }
        }

        // ✅ Immediate fetch
        handleFetch();

        // ✅ Poll every delay ms
        timerRef.current = setInterval(handleFetch, delay);

        return () => {
            controller.abort();

            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [paused, delay, fetchFn]);

    return {
        data,
        loading,
        updating,
        pause: () => setPaused(true),
        resume: () => setPaused(false),
    };
}

function Practical32_Polling() {
    const {
        data,
        loading,
        updating,
        pause,
        resume,
    } = usePollingQuery(fetchUsers, 5000);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>

            {updating && <p>Refreshing...</p>}

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default Practical32_Polling



