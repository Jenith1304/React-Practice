// 3. OTP Input System
// Hooks
// useRef
// useState
// Problem Statement

import { useReducer, useRef,type JSX } from "react";

// Build a 6-digit OTP input where:

// cursor auto moves
// backspace moves backward
// paste fills all boxes
// Real World Mapping

// Banking apps, login systems.

// Concepts
// DOM manipulation
// Managing focus
// Refs vs State
interface State {
  otp: string[];
}

type Action =
  | { type: "UPDATE_OTP"; payload: { index: number; value: string } }
  | { type: "PASTE"; payload: string };

const initialState: State = {
  otp: ["", "", "", "", "", ""],
};
function reducer(state: State, action: Action) {
    switch (action.type) {
        case "UPDATE_OTP":
            const {index, value } = action.payload;
            const newOtp = [...state.otp];
      newOtp[index] = value.slice(-1); // only keep last digit typed
      return { otp: newOtp };
      case "PASTE": {
      const chars = action.payload.split("").slice(0, 6);
      const newOtp = [...state.otp];
      for (let i = 0; i < chars.length; i++) {
        newOtp[i] = chars[i];
      }
      return { otp: newOtp };
    }
    default:
      return state;
    }
}
function Practical3(): JSX.Element {
const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
const [state,dispatch] = useReducer(reducer,initialState);    
function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
if(e.key === "Backspace" && !state.otp[index] && index > 0) {
    inputRefs.current[index - 1]?.focus();
}
}
function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").slice(0, 6).split("");
    dispatch({ type: "PASTE",   payload: pasteData.join("") });
}
function handleChange(index: number, value: string) {
    dispatch({ type: "UPDATE_OTP", payload: { index, value } });
    if(value && index < 6) {
        inputRefs.current[index + 1]?.focus();
    }
}
return(
    <div>
        <h1>OTP Input System</h1>
        {
            state.otp.map((digit,index)=>(
                <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                value={digit}
                onChange={(e) => {
                    handleChange(index, e.target.value);
                }}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                name={`otp-${index}`}
                />
            ))
        }
         <p>OTP: {state.otp.join("")}</p>
    </div>
)
}
export default Practical3