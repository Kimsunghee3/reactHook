const date = new Date()
console.log("date:", date)
// date: 2023-05-16T05:13:35.704Z

const change = date.toJSON()
console.log("change:", change)
// Tue May 16 2023 14:38:32 GMT+0900 (대한민국 표준시)

const a = document.querySelector("#day").innerHTML = date + `<br />` + date
console.log("a:", a)
// const b = document.querySelector("#day").innerHTML += str
// console.log("b:", b)


