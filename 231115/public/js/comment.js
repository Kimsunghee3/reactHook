const clickContent = document.querySelector('.commentContent').addEventListener("click", () => {
    const clickInput = document.querySelector(".commentContent").value = ""
    const content = document.querySelector(".commentContent").value
    addComment.innerText = content
})

const commentContent = document.querySelector(".commentContent").addEventListener("submit", e => {
    if(commentContent == "댓글을 입력해주세요."){
        e.preventDefault()
    }else{
        clickContent()
    }
})

const setMouse = () => {
    const on = document.querySelector(".commentContent").value
    if(on == null || ""){
        mouseOver()
    }else if(on !== null || "") {
        e.preventDefault(() => {
            return on
        })
    }
}

const mouseOver = document.querySelector(".wallpaper").addEventListener("mouseover", e => {
    document.querySelector(".commentContent").value = "댓글을 입력해주세요"
})


let count = 0

const save = document.querySelector(".submitBtn").addEventListener("submit", (e) =>{
    if(commentContent.value = ""){
        e.preventDefault((count) => {
            return count
        })
    }else {
        count = count + 1
        result.innerText =  "댓글" + " " + count
    }
    count = count + 1
    result.innerText = "댓글" + " " + count
})


const clickSave = document.querySelector(".submitBtn").addEventListener("submit", (count) => {
    count = count + 1
    result.innerText = "댓글" + " " + count
})