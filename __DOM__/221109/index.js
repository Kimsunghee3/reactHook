function submitHandler(e){
    e.preventDefault()

    const uid = document.querySelector("#uid")
    const upw = document.querySelector("#upw")
    const error = document.querySelector("#error")
    console.log("uid:", uid)
    console.log("아이디는:", uid.value !== "")
    console.log("패스워드는:", upw.value !== "")

    if(uid.value !== "" && upw.value !== ""){
        const userList = document.querySelector("#userList")
        const li = document.createElement("li")
        li.innerHTML = uid.value + '' + upw.value
        userList.append(li)

        uid.value = ""
        upw.value = ""
        error.style = "display: none"

    }else{
        alert("아이디나 패스워드를 입력해주세요!")
        error.style = "display.block"
    }
    uid.focus()
}

function init(){
    const form = document.querySelector("#loginForm")
    form.addEventListener("submit", submitHandler)
}

document.addEventListener("DOMContentLoaded", init)
