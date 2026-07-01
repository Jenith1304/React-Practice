import React, { useState } from "react";

export function Pagination() {
    const totalPages = 20;
    const displayMax = 5;

    const [currentPage, setCurrentPage] = useState(1);

    const pages = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    const startIndex =
        Math.floor((currentPage - 1) / displayMax) *
        displayMax;

    const visiblePages = pages.slice(
        startIndex,
        startIndex + displayMax
    );

    return (
        <div>
            <button
                disabled={currentPage === 1}
                onClick={() =>
                    setCurrentPage((prev) =>
                        Math.max(prev - 1, 1)
                    )
                }
            >
                Prev
            </button>

            {visiblePages.map((page) => (
                <button
                    key={page}
                    onClick={() =>
                        setCurrentPage(page)
                    }
                    style={{
                        backgroundColor:
                            currentPage === page
                                ? "blue"
                                : "white",
                        color:
                            currentPage === page
                                ? "white"
                                : "black",
                        margin: "5px",
                    }}
                >
                    {page}
                </button>
            ))}

            <button
                disabled={
                    currentPage === totalPages
                }
                onClick={() =>
                    setCurrentPage((prev) =>
                        Math.min(
                            prev + 1,
                            totalPages
                        )
                    )
                }
            >
                Next
            </button>
        </div>
    );
}