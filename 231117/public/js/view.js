const btn = document.querySelector("#btn")
const item = window.localStorage.getItem("boards")
const boards = JSON.parse(item)

const idx = location.search.split("=")
const index = idx[1]
const board = boards[index]

const viewfrm = document.querySelectorAll("#viewfrm > div")

for(let i=0; i<viewfrm.length; i++){
    const id = viewfrm[i].id
    const span = viewfrm[i].querySelector("span")

    span.innerHTML = board[id]
}

btn.addEventListener("click", function(){
    location.href = `../board/modify.html?index=${index}`
})