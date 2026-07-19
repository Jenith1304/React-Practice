{/*  <Tooltip
  content="Copied!"
>
  <button>
    Copy
  </button>
</Tooltip>
Requirements
Tooltip appears above every element.
Position follows the button while scrolling.
Tooltip should not be clipped by parent containers.
Hide when mouse leaves.
Recalculate position when window resizes. */}

import React, { useLayoutEffect, useRef, useState, type ReactElement, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

const Practical48_ToolTip = () => {
    return (

        <Tooltip
            content="Copied!"
        >
            <button>
                Copy
            </button>
        </Tooltip>
    )
}
export default Practical48_ToolTip

type TooltipType = {
    children: ReactElement
    content: string
}
const Tooltip = ({ children, content }: TooltipType) => {
    const [pos, setPos] = useState({ left: 0, top: 0 })
    const [isVisisble, setIsVisible] = useState(false)
    const targetRef = useRef<HTMLElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const ClonedElement = React.cloneElement(children, {
        onMouseEnter: () => setIsVisible(true),
        onMouseLeave: () => setIsVisible(false),
        ref: targetRef
    })
    useLayoutEffect(() => {
        const updatePosition = () => {
            if (!targetRef.current || !tooltipRef.current) return;

            const rect = targetRef.current.getBoundingClientRect();

            const tooltipWidth = tooltipRef.current.offsetWidth;
            const tooltipHeight = tooltipRef.current.offsetHeight;

            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            const padding = 8;

            // Ideal position (above the target)
            let left = rect.left + rect.width / 2;
            let top = rect.top - tooltipHeight - padding;

            // Prevent overflow on the left
            left = Math.max(tooltipWidth / 2 + padding, left);

            // Prevent overflow on the right
            left = Math.min(
                screenWidth - tooltipWidth / 2 - padding,
                left
            );

            // If there's not enough space above, show below
            if (top < padding) {
                top = rect.bottom + padding;
            }

            setPos({
                left,
                top,
            });
        };
        window.addEventListener("scroll", updatePosition)
        window.addEventListener("resize", updatePosition)
        return (() => {
            window.removeEventListener("scroll", updatePosition)
            window.removeEventListener("resize", updatePosition)
        })

    }, [isVisisble])

    return <div style={{ position: "relative" }}>{ClonedElement} {isVisisble && createPortal(<div
        ref={tooltipRef}
        style={{
            position: "fixed",
            left: pos.left,
            top: pos.top,
            transform: "translateX(-50%)",
        }}
    >
        {content}
    </div>, document.body)}</div>
}