const pw = document.querySelector("#pw")
const pw2 = document.querySelector("#pw")
console.log(pw === pw2)
// true

const repw = document.querySelector("#repw")
console.log("repw:", repw)

const error = document.querySelector("#pwError")
console.log("error:", error)

function changeHandler(e){
    if(pw.value === ""){
        error.style = "color:yellow"
        error.innerHTML = "비밀번호를 먼저 입력해주세요"
        pw.focus()
        e.target.value = ""
        // keyup이벤트가 담김
        console.log('e:', e)
        console.log("e === changeHandler", e == changeHandler)
        // e.target = <input type = "text" id="repw" />
        console.log("e.target:", e.target)
        
        // e.target.value = ""
        console.log('e.target.value:', e.target.value)
        return
    }

    let style = ""
    let innerHTML = ""
    
    if(e.target.value !== pw.value){
        style = "color: green"
        innerHTML = "패스워드가 일치하지 않습니다."        
    }else{
        style = "color: pink"
        innerHTML = "패스워드가 일치합니다."
    }

    error.style = style
    error.innerHTML = innerHTML
}

// keyup: 키보드를 눌렀을 때
repw.addEventListener("keyup", changeHandler)