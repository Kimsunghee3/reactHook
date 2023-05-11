# Hook
- useCallback
- useMemo

- useContext
- useReducer

### src > pages > counter.jsx
counter함수를 실행하게 되면 counter 함수 안의 코드블럭 안에 있는 내용이 실행된다.
setCount함수를 실행하여 상태가 변경되었다면 리랜더링이 되면서 count컴포넌트가 재실행된다. - 버튼을 눌렀을 경우 리랜더링이되면서 counter컴포넌트가 재실행된다.
컴포넌트가 랜더가 됐다는 말은 해당 함수자체에 있는 내부적인 코드가 다시 실행된다는 의미이다. + 버튼을 눌렀을 경우 리랜더링이 되면서 counter컴포넌트가 재실행된다.
상태를 관리하기 위하여 useState를 사용한다.(상태를 관리할 수 있도록 만들어진 함수이다.)
```jsx
import { useState } from "react"

export const Counter = () => {
    // [첫번째 인자: 변수, 두번째 인자: 변수를 갱신할 수 있는 함수]
    // useState를 이용해 변수를 선언하면 2개의 아이템쌍이 들어있는 배열로 만들어진다.
    // 따라서 아래와 같이 배열 구조 분해를 이용해 count라는 변수와 setCount라는 함수를 반환받은 것이다. 
    // useState()함수의 인자 값으로 들어가는 값 `0`은 상태를 관리할 변수에 들어갈 초기값이다.
    // 아래의 경우 count변수에 0이 초기값으로 들어가게되고, setCount함수를 이용해 상태 값을 변경할 수 있다.
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


### useCallback
- 함수를 재실행하고 싶지 않을 때 사용
```jsx
useCallback(function값, [상태]) => function값
```
첫번째 인자: function값
두번째 인자: 상태
return: function값

### useMemo