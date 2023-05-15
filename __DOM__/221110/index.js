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

const promise = new Promise((resolve, reject) => {
    const data = fetch("http://google.com")

    if(data){
        resolve(data)
    }else{
        reject("Error")
    }
})