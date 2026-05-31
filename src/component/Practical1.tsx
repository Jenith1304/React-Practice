// Build a dashboard counter system where:

import { useState,useEffect,type JSX } from "react";

// User can increment/decrement
// Show:
// total clicks
// last updated time
// auto-save to localStorage
// Restore state after refresh

//Logic:1

// function Practical1()
// {
//     let totalClicks = localStorage.getItem("counterObj")?JSON.parse(localStorage.getItem("counterObj")!).totalClicks:"0";
//     const [counter, setCounter] = useState(0);
//     function increment()
//     {
//         setCounter((counter)=>counter+1)
//         totalClicks=String(Number(totalClicks)+1)
//         const obj={
//             time: new Date().toLocaleTimeString(),
//             totalClicks: totalClicks
//         }
//         localStorage.setItem("counterObj",JSON.stringify(obj))
//     }
//     function decrement()
//     {
//         setCounter((counter)=>counter-1)
//         totalClicks=String(Number(totalClicks)-1)
//          const obj={
//             time: new Date().toLocaleTimeString(),
//             totalClicks: totalClicks
//         }
//         localStorage.setItem("counterObj",JSON.stringify(obj))
//     }
// return(
//     <div>
//         <h2>Counter:{counter}</h2>
//         <h2>Total:{totalClicks}</h2>
//         <h2>Last Updated:{localStorage.getItem("counterObj")?JSON.parse(localStorage.getItem("counterObj")!).time:"Not updated yet"}</h2>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//     </div>
// )
// }

//Logic:2

interface CounterData {
  counter: number;
  totalClicks: number;
  time: string;
}

function Practical1(): JSX.Element {
  // Restore state from localStorage if available
  const saved = localStorage.getItem("counterObj");
  const initialData: CounterData = saved
    ? JSON.parse(saved)
    : { counter: 0, totalClicks: 0, time: "Not updated yet" };

  const [counter, setCounter] = useState<number>(initialData.counter);
  const [totalClicks, setTotalClicks] = useState<number>(initialData.totalClicks);
  const [lastUpdated, setLastUpdated] = useState<string>(initialData.time);

  // Auto-save whenever state changes
  useEffect(() => {
    const obj: CounterData = {
      counter,
      totalClicks,
      time: lastUpdated,
    };
    localStorage.setItem("counterObj", JSON.stringify(obj));
  }, [counter, totalClicks, lastUpdated]);

  function increment(): void {
    setCounter((prev) => prev + 1);
    setTotalClicks((prev) => prev + 1);
    setLastUpdated(new Date().toLocaleTimeString());
  }

  function decrement(): void {
    setCounter((prev) => prev - 1);
    setTotalClicks((prev) => prev - 1);
    setLastUpdated(new Date().toLocaleTimeString());
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <h2>Total: {totalClicks}</h2>
      <h2>Last Updated: {lastUpdated}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Practical1