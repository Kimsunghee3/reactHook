import { useState } from "react"

export const Memo = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    
    const oddNumbers = numbers.filter((v) => v % 2 !== 0)
    const handleClick = () => {
        // ...numbers:1,2,3,4,5,,6,7,8,9,10이 들어감
        setNumbers(...numbers, numbers.length + 1)
    }
    return(
        <div>
            <p>숫자: {numbers.join(", ")}</p>
            <p>홀수: {numbers.join(" , ")}</p>
            <button onClick={handleClick}> 요소 추가 </button>
        </div>
    )
}