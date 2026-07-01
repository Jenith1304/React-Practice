import { useEffect, useState } from "react";

function usePagination() {
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [isPrev, setIsPrev] = useState(false)
    const [isNext, setIsNext] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${page}*5`)
            const json = await data.json()
            setData(json.results)
            setIsPrev(json.previous !== null)
            setIsNext(json.next !== null)
        }
        fetchData()
    }, [page])

    function handlePrev() {
        setPage((prev) => prev - 1)
    }
    function handleNext() {
        setPage((prev) => prev + 1)
    }
    return { data, handlePrev, handleNext, isPrev, isNext }

}

export const Practical16_usePagination = () => {
    const { data, handlePrev, handleNext, isPrev, isNext } = usePagination()
    return (
        <div>
            <ul>
                {data.map((item: any) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
            <button onClick={handlePrev} disabled={!isPrev}>
                Previous
            </button>
            <button onClick={handleNext} disabled={!isNext}>
                Next
            </button>
        </div>
    )
}
    