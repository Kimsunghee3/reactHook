// console.log('first')

// setTimeout(function abc(){
//     console.log("second")
// }, 1000);

// console.log("third")

// function add(a, callback){
//     setTimeout(() => callback(a + 10), 100);
// }

// add(5, res => {
//     console.log(res)
// })

// const promise = new Promise((resolve, reject) => {
//     const data = fetch("http://google.com")

//     if(data){
//         resolve(data)
//     }else{
//         reject("Error")
//     }
// })

// const parameter = false
// const promise = new Promise((resolve, reject) => {
//     // if(parameter === !false){
//     //     resolve("resolve 완료!")
//     // }else{
//     //     reject("Error 발생")
//     // }
//     throw new Error("error")
// })

// // promise.then((resolveMessage) => {
// //     console.log(resolveMessage)
// // })

// promise.catch(error => alert(error))

// .finally(
//     console.log("finally실행됨!!")
// )


const promise = new Promise((resolve, reject) => {
    throw new Error("error 발생!!!")
}).catch(alert)