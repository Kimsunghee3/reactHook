document.getElementById("commentBtn").addEventListener("click", addComment)

function addComment(){
    // 사용자에게 입력을 받는 공간
    const userInput = document.getElementById("commentInput")
    const commentList = document.getElementById("commentList")
    const commentContent = userInput.value

    if(commentContent == ""){
        alert("내용을 입력해주세요.")
    }else{
        alert("저장되었습니다.")
        const newComment = document.createElement("div")
        newComment.innerText = commentContent
        commentList.appendChild(newComment)
    }

    userInput.value = ""
}


