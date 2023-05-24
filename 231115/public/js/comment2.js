const inputContent = document.querySelector(".commentContent").addEventListener("keyup", function(event){
    if(event.keyCode === 13){
    event.preventDefault()
    document.getElementById("myBtn").click()
    saveContent()
    }
})


let arr = []

// addEventListener("keypress", saveContent)

function saveContent(){
    const addContent = document.querySelector(".commentContent").value 
    const myArr = arr.push(addContent)

    for(let i=0; i<myArr.length; i++){
        // arrComment.innerText = myArr[i]
        console.log(myArr[i])
    }
}


