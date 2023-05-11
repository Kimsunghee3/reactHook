import React, { useRef } from "react"
export const Ref = () => {
    // {current: null}
    // 인자 값으로 null이 들어가면 {current: null} 형태로 만들어준다.
    const input = useRef(null)
    // {current: null}
    console.log(input)

    return(
        <>
            {/* ref={input} 가상돔이 생성될 때 input을 넣어주겠다. */}
            <input type="text" name="username" id="username" ref={input} />
            <button>포커스!</button>  
        </>
    )
}

