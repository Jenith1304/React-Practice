import React, { useEffect, useState } from 'react'

// const { data, error, isLoading, isValidating, mutate } = useCachedFetch(
//   "/api/user/1",
//   { revalidateOnFocus: true }
// );
// https://jsonplaceholder.typicode.com/users/1

type User = {
    id: number,
    name: string,
    email: string
}
const cacheMap = new Map<string, User>()

export const useCachedFetch = (url: string, { revalidateOnFocus }: { revalidateOnFocus: boolean }) => {
    const [data, setData] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isValidating, setIsValidating] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const mutate = async (background = false) => {
        try {
            if (background) {
                setIsValidating(true);
            } else {
                setIsLoading(true);
            }

            setError(null);

            const res = await fetch(url);

            if (!res.ok) {
                throw new Error("Data fetch error");
            }

            const user: User = await res.json();

            cacheMap.set(url, user);
            setData(user);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            if (background) {
                setIsValidating(false);
            } else {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        if (cacheMap.has(url)) {

            console.log("from cache")

            const data = cacheMap.get(url)
            if (data) {

                setData(data)
                mutate(true)
            }
            else {
                setError("No data found")
            }
        }
        else {
            console.log("not from cache")

            mutate(false)
        }

    }, [url])

    useEffect(() => {
        function handleFocus() {
            if (revalidateOnFocus) {
                mutate(true)
            }
        }
        window.addEventListener("focus", handleFocus)

        return (() => window.removeEventListener("focus", handleFocus))
    }, [revalidateOnFocus, url])

    console.log(cacheMap)
    return { data, isLoading, error, mutate, isValidating }

}

const Practical35_CachedFetch = () => {
    const { data, error, isLoading, mutate, isValidating } = useCachedFetch(
        "https://jsonplaceholder.typicode.com/users/1", { revalidateOnFocus: true }
    );
    // console.log(data)
    // console.log(error)
    // console.log(isLoading)

    if (isLoading) return <p>Loading1.....</p>
    if (error) return <p>SOmething went wrong 1</p>
    return <>
        <h1>In COmponent1</h1>
        {isValidating && <p>Validating1</p>}
        {data?.name}
        <button onClick={() => mutate(true)}>mutate1</button>

        <p>Compoent 1 end</p>
    </>
}


export default Practical35_CachedFetch



