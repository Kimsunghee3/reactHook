### styled-components 설치 안될때 해결방법
### package.json
```json
{
  "name": "230307",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4",
    "styled-components": "^5.3.9"
  }
}
```

# Hook
- useCallback
- useMemo

- useContext
- useReducer

### src > pages > counter.jsx
counter함수를 실행하게 되면 counter 함수 안의 코드블럭 안에 있는 내용이 실행된다.
setCount함수를 실행하여 상태가 변경되었다면 리랜더링이 되면서 count컴포넌트가 재실행된다. - 버튼을 눌렀을 경우 리랜더링이되면서 counter컴포넌트가 재실행된다.
컴포넌트가 랜더가 됐다는 말은 해당 함수자체에 있는 내부적인 코드가 다시 실행된다는 의미이다. + 버튼을 눌렀을 경우 리랜더링이 되면서 counter컴포넌트가 재실행된다.

### useState
상태를 관리하기 위하여 useState를 사용한다.(상태를 관리할 수 있도록 만들어진 함수이다.)
const [state변수, 해당변수를 갱신할 수 있는 함수] = useState(0)
클릭이 발생했을 때마다 화면이 리랜더링 되며, component가 재실행된다.
아래의 코드에서 클릭이 발생했을때는 counter component가 실행될 것이다.
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
        console.log("1증가", setCount(count + 1))
    }
    const decrement = () => {
        setCount(count - 1)
        console.log("-1감소", setCount(count - 1))
    }

    return(
        <>
            <h2>{count}</h2>
            // 클릭이 발생했을 때 setCount함수가 실행돼 count변수의 상태가 변경됨
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </>
    )
}
```

### class로 Counter구현 
new키워드를 사용하여 instance화 했을 때 재실행된다.
한번 instance화 하면 코드를 다시 실행하지 않는다.
onClick이 발생하면 다시 render됨, 물론 render가 되면서 view가 호출되지만,
호출과 생성은 전혀 다르다.
instance화 했을 때 전체 실행이 되고 render메서드 호출 후 return을 반환해준다.

```jsx
class Counter2 extends React.Component{
    state = {count: 0}

    increment(){
        this.setState(){
            this.setState(this.state.count + 1)
        }
    }
    decrement(){
        this.setState(){
            this.setState(this.state.count - 1)
        }
    }
    view(){
        return this.state.count
    }
    
    render(){
        return(
            <>
                <h2> {this.view()} </h2>
                <button onClick={() => this.increment()}> + </button>
                <button onClick={() => this.decrement()}> - </button>
            </>
        )
    }
}
```

### useState를 사용했을 때 문제점
함수형 component로 구현했을 때, 리랜더링이 발동되면 안에 들어가있는 코드들
상태 혹은 함수 혹은 변수들이 다시 실행된다.
코드의 전체적인 부분이 재실행되므로 useCallback, useMemo를 사용함


### useCallback
useCallback은 첫번째 인자값으로 function값이 들어가고
두번째 인자값으로 배열이 들어가고, 배열 안에는 상태에 대한 내용이 들어온다.
function값을 리턴해준다.
함수앞에 붙여서 사용해주면 된다.

useCallback은 리랜더링이 되더라도 상태가 바뀌지 않으면 function값을 실행하지 않는다.
이미 저장했던 값을 상태가 변하지 않으면 그대로 가져와 사용한다.
```jsx
// useCallback 기본 형태
useCallback(function값, [상태]) => function값

두번째 인자값으로 배열안에 상태 값을 주지 않아도 실행이되는 이유는 
useCallback이 함수값을 가지고 있다가 view에 넘겨주기 때문이다.
state값은 증가하지만 화면에는 출력되지 않는다. 

상태값이 없이 배열만 있는 경우 componentDidMount()가 실행된다.
최초랜더시만 생성을 하고 view함수를 만들지 않겠다고 선언한 것이다.
const view = useCallback(() => {
    return count
}, [count])
```
Counter함수가 실행되었을 때 코드블럭안에 있는 함수들이 차례대로 실행이되고,
useCallback이 실행되면서 count가 0일때(최초 랜더되었을 때) 함수자체를 view에 넣어준다.

### useCallback의 잘못된 예
click이 발생했을때 Counter함수가 호출되고 재실행이되는데 useCallback이 빈배열이므로 재실행할 필요가 없어,
처음실행되었을때 변수(메모리)에 담겨있던 값(0)을 불러오게 된다. 
함수 값 자체를 전달해줌
```jsx
import React, { useState, useCallback } from "react"
export const Counter = () => {
    const [count, setCount] = useState(0)
    const [view, setView] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const view = useCallback(() => {
        return count
    }, [count])

    return(
        <>
            <h2>{view()}</h2>
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


```

### useEffect
useEffect는 첫번째 인자값으로 function값이 들어오고, 두번째 인자값으로 빈배열이 들어오거나
배열 안에 상태 값이 들어오게 되며, return값은 없다.
```jsx
// 기본 형태
useEffect(function값, [상태]) 
```


### useMemo
useMemo를 사용한 아래의 예제코드를 살펴보자

### count * 2 를 나타내고싶다면 아래와 같이 `{count * 2}`형태로 표현하면 된다.
```jsx
<h2> { count * 2 } </h2>
```

### moment
날짜를 쉽게 구할 수 있는 라이브러리

### 2023-03-07 10:01에서 0번째 인덱스(날짜)만 출력하고 싶다면
```jsx
const datetime = "2023-03-07  10:01"
const date = datetime.split("")[0]

<h3> {date} </h3>
// "2023-03-07"
```

### Counter를 마지막에 누른 시간을 출력하고 싶다면
```jsx
const getDate = () => {
    const today = newDate()
    
    const year = today.getFullYear()
    const month = today.getMonth()
    const day = newDate().getDate()

    return `${year}-${month}-${day}`
}

const datetime = getDate()
```

### count의 상태가 변했을 때 getDate() 호출한 결과물을 사용하겠다.
```jsx
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
    
    // useMemo를 통해 마지막 사용했던 값을 가지고 있다가 변수today에 넣어주었다
    // return에 대한 결과물을 today에 넣어줌
    const today = useMemo(() => {
        return getDate()
    }, [count])
```


### useMemo, useCallback의 차이점
```jsx
// useMemo는 return값 getDate()가 today에 담긴다.
const today = useMemo(() => {
    return getDate()
}, [count])

// useCallback은 useCallback안의 콜백함수자체가 view에 담긴다.
const view = useCallback(() => {
    console.log("실행되나!")
    return count
}, [count])
```

### useMemo를 사용하여 홀수만 걸러내는 함수만들기!!
```jsx
export const Memo = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    // 2로 나누고 나머지 값이 0이 아닐 경우 홀수가 되도록 만들어줌
    const oddNumbers = numbers.filter((v) => v % 2 !== 0)
    const handleClick = () => {
        setNumbers(...numbers, numbers.length + 1)
    }
    return(
        <div>
            // useState에 배열을 담아 numbers에 내용을 담아주었고
            // join메서드를 사용하여 배열요소마다 ,를 찍어주었고 string형태로 
            // 변환하여 출력했다.
            <p>숫자: {number.join(", ")}</p>
            <p>홀수: {oddNumbers.join(", ")}</p>
            <button onClick={handleClick}> 요소추가 </button>
        </div>
    )
}
```

<!-- ### react에서 상태를 사용하는 이유?! -->

