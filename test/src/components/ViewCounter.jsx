import React, { useState, useCallback, useMemo } from "react"

const ViewCounter = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState("")

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    const view = useCallback(() => {
        console.log("실행됨?")
        return count
    }, [count])

    const getDate = () => {
        const today = new Date()

        const year = today.getFullYear()
        const month = today.getMonth()
        const day = today.getDate()
        const hour = today.getHours()
        const minute = today.getMinutes()
        const second = today.getSeconds()

        return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    }

    const today = useMemo(() => {
        return getDate()
    }, [count])

    return(
        <>
            <h2>{count}</h2>
            <h3>{today}</h3>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
            <h2>{value}</h2>
            <button 
                onClick={() => {
                setValue(value + 1)
            }}
            >
                +
            </button>
        </>
    )
}

class Counter2 extends React.Component{
    state = {count: 0}

    increment(){
        this.setState(this.state.count + 1)
    }
    decrement(){
        this.setState(this.state.count -1)
    }
    view(){
        return this.state.count
    }

    render(){
        return(
            <>
                <h2>{this.view()}</h2>
                <button onClick={() => this.increment}> + </button>
                <button onClick={() => this.decrement}> - </button>
            </>
        )
    }
}

const add = (a, b) => {
    return a + b
}
add(1, 2)

export default ViewCounter