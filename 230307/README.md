# Hook
- useCallback
- useMemo

- useContext
- useReducer

### src > pages > counter.jsx
counter함수를 실행하게 되면 counter 함수 안의 코드블럭 안에 있는 내용이 실행된다.
setCount함수를 실행하여 상태가 변경되었다면 리랜더링이 되면서 count컴포넌트가 재실행된다. - 버튼을 눌렀을 경우 리랜더링이되면서 counter컴포넌트가 재실행된다.
컴포넌트가 랜더가 됐다는 말은 해당 함수자체에 있는 내부적인 코드가 다시 실행된다는 의미이다. + 버튼을 눌렀을 경우 리랜더링이 되면서 counter컴포넌트가 재실행된다.
```jsx
export const Counter = () => {
    const [count, setCount] = useState(0)
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
        </>
    )
}
```

### useState 문제점
함수형 component로 구현했을 때, 리랜더링이 발동되면 안에 들어가있는 코드들
상태 혹은 함수 혹은 변수들이 다시 실행된다.