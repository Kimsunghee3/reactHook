const inputContent = document.querySelector(".commentContent").addEventListener("keyup", function(event){
    if(event.keyCode === 13){
    event.preventDefault()
    document.getElementById("myBtn").click()
    }
})

let arr = []

const addContent = document.querySelector(".commentForm").onsubmit = (() => {
    let content = document.querySelector(".commentContent").value
    arr.push(content)
    // let data = new Array
    
    // function commentData(){
        //     let content = document.querySelector(".commentContent").value 
        //     data.push(content)
        
        //     console.log(data)
        // }
        
        return false
    })
    
arr[0].innerTEXT