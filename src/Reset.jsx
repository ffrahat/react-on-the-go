import { useState } from "react"

export default function Reset() {

    const [count, setCount] = useState(0)

    const plusOne = () => {
        const updateCount = count + 1;
        setCount(updateCount)
    }

    const minouseOne = () => {
        const updateCount = count - 1;
        setCount(updateCount)
    }
    const resetAll = () => {
        setCount(0)
    }

    return (
        <div className="card">
            <h2>Count : {count} </h2>
            
            <button className="btn" onClick={plusOne}> + 1 </button>
            <button className="btn" onClick={minouseOne}> - 1 </button>
            <button className="btn" onClick={resetAll}> Reset </button>
        </div>
    )
}