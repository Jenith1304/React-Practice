import { useState, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const targetRef = useRef(null);

  useLayoutEffect(() => {
    if (!visible) return;

    const rect = targetRef.current.getBoundingClientRect();

    setPosition({
      top: rect.top - 40,
      left: rect.left + rect.width / 2,
    });
  }, [visible]);

  return (
    <>
      <span
        ref={targetRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </span>

      {visible &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              transform: "translateX(-50%)",
              background: "black",
              color: "white",
              padding: "6px 10px",
              borderRadius: "4px",
            }}
          >
            {text}
          </div>,
          document.body
        )}
    </>
  );
}