### form
submit이벤트는 form 엘리먼트에서만 이벤트 등록이 가능하다
submit이벤트는 form 요소에서 발생한다.
```js
const form = document.querySelector("#loginForm")
form.addEventListener("submit", submitHandler)
```

### focus
엔터를 누르면 focus()메서드가 실행되어 바로 다음 입력창 요소로 포커싱하여 연달아 바로 입력할 수 있게 하는 기법이다.
```js
function changeHandler(e){
    if(pw.value === ""){
        error.style = "color:yellow"
        error.innerHTML = "비밀번호를 먼저 입력해주세요"
        pw.focus()
        e.target.value = ""
        // keyup이벤트가 담김
        console.log('e:', e)
        console.log("e === changeHandler", e == changeHandler)
        // e.target = <input type = "text" id="repw" />
        console.log("e.target:", e.target)
        
        // e.target.value = ""
        console.log('e.target.value:', e.target.value)
        return
    }

    let style = ""
    let innerHTML = ""
    
    if(e.target.value !== pw.value){
        style = "color: green"
        innerHTML = "패스워드가 일치하지 않습니다."        
    }else{
        style = "color: pink"
        innerHTML = "패스워드가 일치합니다."
    }

    error.style = style
    error.innerHTML = innerHTML
}
```

### e.preventDefault()
a태그나 submit 누르게 되면 href를 통해 이동하거나, 창이 새로고침하여 실행되는데
preventDefault를 통해 이러한 동작을 막아줄 수 있다.
-> 기본클릭 동작을 막을 수 있다.
```html
<a href="http://google.com"> 구글로 이동~!! </a>
// preventDefault로 인하여 이동이 막아진다.
const prohibition =  document.querySelector("a").preventDefault()

// e.preventDefault로 사용
<input type="submit" value="제출" />
<script>
    const prohibition = document
    .querySelector("input")
    .addEventListener("click", function(e){
        e.preventDefault()
    })

// 이후 내가 원하는 시점에서 `submit`을 날리고 싶다면
e.target.submit()
</script>
```

### createElement()
document.createElement메서드는 지정한 tagName의 HTML요소를 만들어 반환한다.
```js
// a태그가 생성된다.
const a = document.querySelector("a")
```

### append
append() 메소드는 선택된 요소의 마지막에 새로운 HTML요소나 콘텐츠를 추가한다.
```html
<ul id="userList">
    <li> 첫번째 아이템 </li>
    <li> 두번째 아이템 </li>
</ul>

<script> 
    const userList = document.querySelector("#userList")

    // 두번째 li뒤에 li태그가 추가된다.
    userList.append(li)
</script>
``` 

### DOMContentLoaded
브라우저가 HTML을 전부 읽고 DOM트리를 완성하는 즉시 발생한다.   
DOM이 생성되기 전 DOM을 조작하는 JavaScript코드가 실행되어 원하지 않은 결과를 내는 것을 막을 수 있다. 
```js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!!")
})
```

### onload
문서의 모든 콘텐츠가 로드되었을 때 실행된다.
DOMContentLoaded가 onload보다 먼저 실행된다.
```js
document.onload() = function a(){}
```

### keyup
키보드 이벤트는 사용자가 키를 누르거나 키를 놓을 때 발생한다.
키를 누를 때는 keydown타입의 이벤트가 발생하고 키를 놓을 때는 keyup타입의 이벤트가 발생한다.
```js
const keyup = document.querySelector("#keyup").keyup()
```

### keydown
키보드를 누를 때 실행되며, 계속 누르고 있는 경우에도 계속 실행된다.
```js
const keydown = document.querySelector("#keydown").keydown()
```

### keypress
키보드를 누를 때 실행되며 계속 누르고있는 경우에도 계속 실행된다.
```js
const keypress = document.querySelector("#keypress").keypress()
```

