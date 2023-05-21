const inputContent = document.querySelector(".commentContent").addEventListener("keyup", function(event){
    if(event.keyCode === 13){
    event.preventDefault()
    document.getElementById("myBtn").click()
    }
})

const addContent = document.querySelector(".commentForm").onsubmit = (() => {
    let data = new Array

    function commentData(){
        let content = document.querySelector(".commentContent").value 
        data.push(content)

        console.log(data)
    }
    
    return false
})


