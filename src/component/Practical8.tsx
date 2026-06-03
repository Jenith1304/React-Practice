//pagination

import { useEffect, useState } from "react";

// fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3')
const Practical8 = () => {
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;

    const fetchData = async (limit, skip) => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`);
            const data = await response.json();
            console.log(data);
            if (data && data.products) {
                setData(data);
                setTotal(data.total);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        fetchData(limit, (currentPage - 1) * limit);
    }, [currentPage])

    return (
        <div>
            <h1>Total Products: {total}</h1>
            {
                data && data.products.map((product) => (
                    <div key={product.id} className="product">
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
            >
                Prev
            </button>            {
                Array.from({ length: Math.ceil(total / limit) }, (_, index) => (
                    <>
                        <button key={index} onClick={() => setCurrentPage(index + 1)} style={{
                            fontWeight: currentPage === index + 1 ? "bold" : "normal"
                        }}>
                            {index + 1}
                        </button>
                    </>
                ))}
            <button
                disabled={currentPage === Math.ceil(total / limit)}
                onClick={() => setCurrentPage(prev => prev + 1)}
            >
                Next
            </button>
        </div>
    )
}

export default Practical8