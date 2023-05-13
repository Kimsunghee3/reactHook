import { useState } from "react"

export const Counter = () => {
    // [첫번째 인자: 변수, 두번째 인자: 함수]
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    const view = () => {
        // 랜더가 될 때마다 실행됨, return에서 view함수를 호출해주고 있기 때문
        console.log("실행됨?")
        return count
    }

    return(
        <>
            <h2>{view()}</h2>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
            <h2>{value}</h2>
            <button onClick={() => {
                setValue(value + 1)
            }}> + </button>
        </>
    )
}


