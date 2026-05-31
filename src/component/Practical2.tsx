// 2. Auto-Save Notes App
// Hooks
// useState
// useEffect
// useRef
// Problem Statement
// Create a notes editor that:
// autosaves after user stops typing for 1 second
// shows “Saving…” indicator
// prevents unnecessary saves
// Real World Mapping

// Google Docs, Notion, Medium editor.

// Important Concepts
// Debouncing
// Cleanup functions
// Timers with useRef
// Avoiding stale closures

import { useState, useRef, type JSX } from "react";

function Practical2(): JSX.Element {
  const [isSaving, setIsSaving] = useState(false);
  const [note, setNote] = useState<string>(localStorage.getItem("note") || "");
  const timerRef = useRef<number | null>(null);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setNote(value);

    // Clear the previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setIsSaving(true);

    // Set a new timer to save after 1 second of inactivity
    timerRef.current = window.setTimeout(() => {
      localStorage.setItem("note", value); // Save to localStorage
      setIsSaving(false);
    }, 1000);
  }

  return (
    <div>
      <h1>Auto-Save Notes App</h1>
      <input
        type="text"
        placeholder="Start typing your notes here..."
        value={note}
        onChange={handleInputChange}
      />
      {isSaving && <p>Saving...</p>}
      {localStorage.getItem("note") && <p>Saved Note: {localStorage.getItem("note")}</p>}
    </div>
  );
}

export default Practical2;
