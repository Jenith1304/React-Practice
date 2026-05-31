// 5. Product Search Dashboard
// Hooks
// useState
// useMemo
// Problem Statement

// Create:

// large product list
// filtering
// sorting
// price range search
// Requirements

// Expensive filtering should not rerun unnecessarily.

// Real World Mapping

// Amazon, Flipkart, admin dashboards.

// Concepts
// Expensive calculations
// Memoization
// Derived state
// Bonus

// Add:

// category filters
// pagination
import { useMemo, useRef, useState, type JSX } from "react";
import { productData } from "../data/productData";
function Practical5(): JSX.Element {
    const [products, setProducts] = useState(productData);
    const startPrice = useRef<HTMLInputElement>(null);
    const endPrice = useRef<HTMLInputElement>(null);
    const filteredElectronics = useMemo(() => products.filter(product => product.category === "Electronics"), [products]);
    const sortedByPrice = useMemo(() => [...products].sort((a, b) => a.price - b.price), [products]);
    function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log("clicked")
        const { checked } = e.target;
        const category = e.target.name;
        if (checked && category === "electronics") {
            const filtered = filteredElectronics
            console.log(filtered)
            setProducts(filtered);
        }
        else {
            setProducts(productData);
        }
    }
    function handleSortChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { checked } = e.target;
        if (checked) {
            const sorted = sortedByPrice;
            setProducts(sorted);
        }
        else {
            setProducts(productData);
        }
    }
    function handlePriceRangeSearch() {
        const min = parseFloat(startPrice.current?.value || "0");
        const max = parseFloat(endPrice.current?.value || "0");

        const filtered = products.filter(
            product => product.price >= min && product.price <= max
        );

        setProducts(filtered);
        startPrice.current!.value = "";
        endPrice.current!.value = "";
    }
    return (
        <div>
            <h1>Product Search Dashboard</h1>
            <p>filter</p>
            <input type="checkbox" id="electronics" name="electronics" onChange={(e) => { handleFilterChange(e) }} />
            <label htmlFor="electronics">Electronics</label>

            <p>sorting</p>
            <input type="checkbox" id="sortByPrice" name="sortByPrice" onChange={(e) => { handleSortChange(e) }} />
            <label htmlFor="sortByPrice">Sort by Price</label>

            <p>Price Range</p>
            <input type="number" placeholder="Min Price" ref={startPrice} />
            <input type="number" placeholder="Max Price" ref={endPrice} />
            <button onClick={handlePriceRangeSearch}>Search</button>
            <button onClick={() => setProducts(productData)}>Reset</button>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <p>In Stock: {product.inStock ? "Yes" : "No"}</p>
                        <p>Tags: {product.tags.join(", ")}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default Practical5;