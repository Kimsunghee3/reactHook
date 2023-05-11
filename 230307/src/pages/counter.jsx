import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    const view = () => {
        console.log("실행됨?")
        return count
    }

    return(
        <>
            <h2>{view()}</h2>
            <button> {increment} </button>
            <button> {decrement} </button>
            <h2>{value()}</h2>
            <button onClick={() => {
                setValue(value + 1)
            }}></button>
        </>
    )
}