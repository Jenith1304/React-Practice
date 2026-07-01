import React, { useOptimistic, useRef, useState } from 'react'
import { productData } from '../data/productData'

export const Optimistic = () => {
    const [comments, setComments] = useState(["Hello"]);
    const [optimistic, addOptimistic] = useOptimistic(comments, (comments, newCOmment) => [
        ...comments, newCOmment + "sending"
    ])
    console.log(optimistic)
    const ref = useRef(null)
    const handleSubmit = async () => {
        addOptimistic(ref.current?.value)
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        setComments((prev) => [...prev, ref.current.value])
    }

    return (
        <div>
            <input type='text' placeholder='Enter product name' ref={ref} />
            <button onClick={handleSubmit}>Submit</button>
            {optimistic.map((comment) => {
                return <p>{comment}</p>
            })}
        </div>
    )
}
