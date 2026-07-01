import React, { Fragment, useState } from 'react'


export const Practical18_Accordion = () => {
    const [currentIndex, setCurrentIndex] = useState(null)
    return (
        <div>

            <h1>Accordion</h1>
            <div>
                {
                    Array.from({ length: 10 }, (_, index) => (
                        <div key={index}>
                            <button onClick={() => {
                                if (currentIndex === index) setCurrentIndex(null)

                                else setCurrentIndex(index)
                            }
                            } >


                                title {index}
                            </button>

                            {index === currentIndex && (
                                <p>Hello {index}</p>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
