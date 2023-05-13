import { useState } from "react"

export const TwoCounter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count -1)
    }

    return(
        <>
        <p>hello world</p>
            <div>
                <h2>{count}</h2>
                <button onClick={increment}> + </button>
                <button onClick={decrement}> - </button>
            </div>
        </>
    )
}