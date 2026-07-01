import React from 'react'

function withOptimised(WrappedComponent) {
    return function EnhancedComponent(props) {
        const element = WrappedComponent(props);
        console.log(element)
        let h1Count = 0;
        let pCount = 0;

        const modifiedChildren = React.Children.map(
            element.props.children,
            (child) => {
                if (!React.isValidElement(child)) return child;

                // Handle h1
                if (child.type === "h1") {
                    h1Count++;

                    if (h1Count === 1) {
                        return child; // Don't modify first h1
                    }

                    return React.cloneElement(child, {
                        style: {
                            background: "red",
                            color: "white",
                        },
                    });
                }

                // Handle p
                if (child.type === "p") {
                    pCount++;

                    if (pCount === 1) {
                        return child; // Don't modify first p
                    }

                    return React.cloneElement(child, {
                        style: {
                            background: "green",
                            color: "white",
                        },
                    });
                }

                return child;
            }
        );

        return React.cloneElement(element, {}, modifiedChildren);
    };
}

const HOC = () => {
    return (
        <>
            <h1>Hello</h1>
            <p>paragraph</p>
            <h1>Namaste</h1>
            <p>Yellow</p>
        </>
    )
}
export const Pr26_HOC = withOptimised(HOC)
