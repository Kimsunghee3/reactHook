document.getElementById("commentBtn").addEventListener("click", addComment)

function addComment(){
    let userInput = document.getElementById("commentInput")
    let commentList = document.getElementById("commentList")
    let commentContent = userInput.value

    if(commentContent === ""){
        alert("내용을 입력해주세요.")
    }else{
        let newComment = document.createElement("div")
        newComment.innerText = commentContent
    
        commentList.appendChild(newComment)
        userInput.value = ""
    }
}




