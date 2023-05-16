const elements = document.querySelector("#visual > li")

let count = 1
const intervalId = setInterval(function(){
    for(let i=0; i<elements.length; i++){
        if(i === count)elements[i].classList.add("on")
        else elements[i].classList.remove("on")
    }
    if(++count == 5) count = 0
}, 3000);

const arr = ["x", "x", "x", "x", "x", "x"]

for(let i=0; i<arr.length; i++){
    if(i !== 0)arr[i -1] = "x"
    arr[i] = "0"
    console.log(arr)
}


fetch("http://")
    .then((response) => response.json())
    .then((response) => console.log("response", response))
    .then((data) => console.log(data))