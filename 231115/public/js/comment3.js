let values = []

const inputElement = document.querySelector(".commentContent")
inputElement.addEventListener("input", data)

const outputElement = document.querySelector("#commentList")


function data(e){
    let userInput = e.target.value
    values.push(userInput)
    console.log("현재 값", values)

    
    values.forEach(function(value){
        outputElement.innerText += values + '\n'
    })
    
    outputElement.innerText = ""

}

