// 7. Real-Time Analytics Dashboard
// Hooks
// useMemo
// useEffect
// useCallback
// Problem Statement

import type { JSX } from "react";
import { salesData } from "../data/salesData";

// Build charts showing:

// sales data
// live updates
// filters
// export button
// Requirements

// Heavy computations must stay optimized.

// Concepts
// Memoized calculations
// Stable callbacks
// Derived analytics

function Practical7(): JSX.Element {
    const northAmerica = salesData[0];
    const chartData = Object.entries(northAmerica.monthlySales);

    //We need the maximum sale to calculate bar heights.
    const maxSale = Math.max(
        ...chartData.map(([_, value]) => value)
    );
    return (
        <div>
            <h2>Real-Time Analytics Dashboard</h2>
            <div className="h-80 border-b border-l flex items-end gap-2 p-4">
                {chartData.map(([month, sales]) => (
                    <div
                        key={month}
                        className="flex flex-col items-center flex-1"
                    >
                        <div
                            className="bg-blue-500 w-full rounded-t hover:bg-blue-700 transition-colors duration-300"
                            style={{
                                height: `${(sales / maxSale) * 250}px`,
                            }}
                        />

                        <span className="text-xs mt-2">
                            {month.slice(0, 3)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Practical7;