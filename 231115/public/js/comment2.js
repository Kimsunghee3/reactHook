const inputContent = document.querySelector(".commentContent").addEventListener("keyup", function(event){
    if(event.keyCode === 13){
    event.preventDefault()
    document.getElementById("myBtn").click()
    }
})

const addContent = document.querySelector(".commentForm").onsubmit = function(){
    let a = document.querySelector(".commentContent")

    // 서버호출이 불가능하므로 return false로 서버로 호출이 가기전에 프로그램이 종료되게끔 설정해주었다.
    return false
}
