const frm = document.querySelector("#modifyFrm")

const subject = document.querySelector("input[name=subject]")
const writer = document.querySelector("input[name=writer]")
const content = document.querySelector("textarea[name=content]")

const idx = location.search.split("=")
const index = idx[1]
console.log(index)

const item = localStorage.getItem("boards")
const boards = JSON.parse(item)

console.log(boards)
console.log(boards[index])

subject.value = boards[index].subject
writer.value = boards[index].writer
content.innerHTML = boards[index].content

frm.addEventListener("submit", function(e){
    e.preventDefault()

    boards[index].subject = subject.value
    boards[index].writer = subject.writer
    boards[index].content = content.value

    const data = JSON.stringify(boards)
    localStorage.setItem("boards", data)

    location.href = `./board/view.html?index=${index}`
})