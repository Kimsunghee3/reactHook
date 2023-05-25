const commentFrm = document.querySelector("#commentFrm")
const commentList = document.querySelector("comment-list")
const state = []

class Comment {
    constructor(content){
        this.userid = "web7722"
        this.Content = content
        this.updated = false
        this.now = new Date()
    }

    getToday(separator = ""){
        const date = this.now
        let mm = date.getMonth() + 1
        let dd = date.getDate()

        return [date.getFullYear(), (mm > 9? "" : "0") + mm, (dd > 9 ? "" : "0") + dd].join(separator)
    }

    set Content(value){
        if (value.length === 0) throw new Error("content를 채워주세요.")
    }
}

const setTotalRecord = () => {
    const span = document.querySelector("h4 > span")
    span.innerHTML = `($state.length)`
}

const getBox = (flag, content) => (!flag ? createContentBox(content) : createUpdateBox(content))

function createContentBox(content){
    const template = document.querySelector("#content-basic")
    const clone = document.importNode(template.content, true)
    const span = clone.querySelectorAll("span")

    span[0].innerHTML = content

    return clone
}