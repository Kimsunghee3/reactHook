
            Window
           /   |   \
         /     |    \
      DOM     BOM   JavaScript

### 실행
사용자가 웹페이지를 방문하여 웹브라우저가 실행되면 브라우저가 웹문서를 읽기시작한다.
DOM이 생성되고 이미지를 포함한 요소들이 로드되기 시작한다.
모든 요소들이 로드가 완료되면 load메서드가 실행된다.      

### DOM(DocumentObjectModel)
DOM은 문서객체모델이라고 하며, 자바스크립트로 html과 css를 조작하기 위해서 사용한다.


### BOM(Browser Object Model) 
BOM은 브라우저객체모델이라고 하며, JavaScript를 통해 브라우저 창을 관리할 수 있다.
웹브라우저가 제공하는 기능이다. 브라우저 창에 포함된 모든 객체 요소들을 의미한다.
결국 브라우저도 최상위 객체인 window안에서 실행되는 프로그램이므로 모든 개별 객체들은
최상위 객체인 window아래에 존재한다. 


### window
변수와 함수를 선언할 때 window를 붙이지 않는데, window는 전역 객체이므로 페이지
내에 있는 모든 객체를 다 포함하고 있기 때문에 window는 그냥 생략이 가능한 특징이 있다.

### this
기본적으로 this는 전역객체를 가리킨다.
NodeJS환경에서 this는 `global`객체를 가리키고, 브라우저 환경에서는 `window`객체를 가리킨다.
class내에서 사용하는 this문법은 class(인스턴스화 된 객체) 자기자신을 뜻한다.

### document.getElementById()
html태그의 해당 id를 가지고 있는 태그를 불러와 객체로 반환해주고, 인자가 없는 경우 null을 반환한다.
```js
<div id="chop"></div>
<p id="chop"></p>

// html태그에서 id가 `chop`인 태그를 불러와 `chopssal`에 담아서 사용한다.
// 객체`chop`을 반환해준다.
const chopssal = document.getElementById("chop")

// 존재하지 않는 id명을 불러올 경우 
// null값을 반환한다.
document.getElementById("chopssal")
```

### document.querySelector()
html태그에서 selector(선택자)와 일치하는 엘리먼트를 return 해주고,
일치하는 element가 없으면 null을 리턴한다. 한 개의 요소만 찾을 수 있으며 동일한
클래스명을 가진 객체가 있을 경우 html문서 내의 첫번째 요소를 반환한다.
하나의 태그만을 가져오고 싶을 때 사용한다.

# id접근
id에 접근하려고 하면 `# + id명` 형태로 불러와사용하고

# class접근
class에 접근하려면
`. + class명` 형태로 사용하면 된다. 

# Element접근
Element 자체를 선택하려면 Element의 이름을 넣어주면된다.
```html
<h2 id="a"></h2>
<h2 class="b"></h2>
<h2> c </h2>
```
```js
const a = document.querySelector("#a")
const b = document.querySelector(".b")
const c = document.querySelector("h2")
```

### document.getElementById와 document.querySelector()의 공통점
지정한 요소를 찾아서 반환해준다. 반환된 요소는 DOM객체이다(자바스크립트로 조작이 가능하다.)


### document.getElementById와 document.querySelector()의 차이점
document.getElementById는 해당 id를 가지고 있는 태그를 불러오지만,
document.querySelector는 동일한 id가 있는 경우 최상단의 요소를 선택한다.
getElementById는 기호 없이 아이디 입력이 가능하다. id 요소에만 사용이 가능하다.
```html
<div>
    <h2 id="a"></h2>
    <h3 id="a"></h3>
    <h4 id="a"></h4>
</div>
```
```js
document.getElementById("a")

// h2가 최상단에 위치하므로 h2를 반환
document.querySelector("#a")
```

### document.querySelectorAll()
querySelectorAll은 특정 CSS 선택자를 가진 모든 요소를 `배열`로 가져오는 메서드이다.
해당 선택자에 해당하는 모든 요소를 가져온다. NodeList를 반환한다.
반환 객체는 NodeList이므로 for문 또는 forEach문을 사용해야 한다.
또한 (",")를 사용하면 여러요소를 한번에 가져올 수 있다.
여러 개의 태그를 가져오고 싶을 때 사용한다. 


### JavaScript에서 이벤트를 처리하는 방법 3가지
> # 1. HTML요소에 직접 이벤트 속성을 설정
HTML상에서 함수를 실행하라고 명시해주는 방식이다
이벤트를 단 하나 밖에 지정할 수 없다.
```html
<input type="button" onClick="buttonClick()" />
```

> # 2. DOM요소 객체의 이벤트 처리기 프로퍼티에 설정
DOM을 이용해 요소를 선택하고, 변수를 이벤트 처리기의 프로퍼티로 사용한다.
script와 HTML이 분리된 코드이며, 특정 요소의 특정 이벤트에 대해서 이벤트 처리기를
단 하나만 등록할 수 있다.
```js
const btn = document.getElementById("button")
btn.onClick = buttonClick()
```

<br />

> # 3. addEventListener메서드 사용
같은 요소에 같은 이벤트를 여러 등록할 수 있다.
위의 두 방법보다 addEventListener를 사용하는 것이 가장 좋다!!
```html
<h2> items </h2>
<h3></h3>
```
```js
const items = document.querySelectorAll("h2, h3")
const increment =
for(let i=0; i<count; i++){
}
```

### addEventListener()
<br />

addEventListener는 DOM객체에서 이벤트가 발생할 경우 해당 이벤트 처리핸들러를 추가할 수 있는 object이다.
특정DOM에 JavaScript 이벤트가 발생할 때 특정 함수를 호출한다.
여러개의 이벤트 핸들러를 동작할 수 있다.
-> 특정 DOM요소에 이벤트 리스너를 등록할 때 `addEventListener()`를 사용한다.

```js
// 기본형태
DOM객체.addEventListener(이벤트명, 실행할 함수명, 옵션)
```
이벤트명: JavaScript에서 발생할 수 있는 이벤트명을 입력한다.
함수명: 해당 변수는 생략 가능하며 해당 이벤트가 발생할 때 실행할 함수 명을 입력한다.
옵션: 옵션은 생략이 가능하며 자식과 부모 요소에서 발생하는 버블링을 제어하기 위한 옵션이다.


### innerText
태그 안의 텍스트를 가져오거나 바꾸는 기능
바뀌는 범위: 태그 안의 텍스트만 바뀜
```html
<p> 여기가 바뀌는 부분 </p>
```

### innerHTML
태그 자체를 가져오거나 바꾸는 기능
바뀌는 범위: 태그 전체가 바뀐다.
```html
<p> 다 바뀐다!! </p>
```

### getElementsByTagName()
특정 tag명을 가지고 있는 DOM요소에 접근하기 위한 메서드이다.
HTMLCollection객체를 반환하며, for문을 사용하여 element객체를 사용할 수 있다.
```js
// 기본형태
document.getElementsByTagName(태그명)
```
```html
<div>
    <p></p>
    <h2></h2>
<div>

<script>
    document.getElementsByTagName("p")
    // 모든 요소를 지정한다.
    document.getElementsByTagName("*")
</script>
```

### getElementsByClassName()
getElementsByClassName은 태그의 class속성을 사용하여 접근하며, 컬렉션 객체를 반환한다.
```js
// 기본형태
getElementsByClassName(class명)

// 예제
<div class="cover"><div>
<script>
    document.getElementsByClassName("cover")
</script>
```
### Event
일반적인 프로그래밍언어에서 이벤트는 사용자의 동작 혹은 프로그램에서 발생하는 특정한 상황(사건)을 의미한다.
웹페이지에서 마우스를 클릭했을 때, 키를 입력했을 때, 특정 요소에 포커스가 이동했을 때 어떤 사건을 발생시키는 것이다.
이벤트는 일반적으로 그에 맞는 반응이 있어야한다.
따라서 이벤트는 일반적으로 함수로 연결되며 해당 함수는
이벤트가 발생하기 전에는 실행되지 않다가 이벤트가 발생되지 않으면 실행된다.
이 함수를 `EventHandler`라 하며 이벤트에 대응하는 처리를 한다.
-> 사용자의 동작들이 `Event`를 발생시키며, 이벤트가 발생했다는 것은 웹페이지에서 특정 동작이 발생하여 웹 브라우저가 그 사실을 알려주는 것을 의미한다.


### Event Handler
웹 페이지에서 수많은 이벤트가 계속해서 발생한다.
특정 요소에서 발생하는 이벤트를 처리하기 위해서는 `Event Handler`라는 함수를 작성하여 연결해야 한다.
Event Handler가 연결된 특정 요소에서 지정된 타입의 Event가 발생하면, 웹브라우저는 연결된 Event Handler를 실행한다. Event Handler 함수는 Event객체를 인수로 전달 받을 수 있다.
이렇게 전달받은 Event객체를 이용하여 이벤트의 성질을 결정하거나 이벤트의 기본 동작을 막을 수도 있다.
-> 이벤트가 발생했을 때 처리를 담당하는 실행함수를 가리킨다. 


### click
JavaScript의 click함수는 사용자가 클릭하지 않아도 강제적으로 클릭 이벤트를 발생시키는 함수이다.
```js
// 기본형태
.click()
```

### mouseover
사용자가 마우스를 해당 element 바깥에서 안으로 옮겼을 때 발생한다. 
```js
<div onmouseover="chop()"></div>
<script>
    function chop(){
        console.log("Hello Chop")
    }
</script>
```


### mouseout
사용자가 마우스를 해당 객체 바깥으로 옮겼을 때 효과가 발생한다. 
```html
<div onmouseout="chopssal()"></div>
<script>
    const chopssal = () => {
        return(
            <>
                console.log("hello world!")
            </>
        )
    }
</script>
```

### JavaScript Event처리방법 3가지
01. HTML 요소의 속성으로 등록: 이벤트를 단 하나 밖에 지정할 수 없는 단점이 있다.
02. DOM 요소의 프로퍼티로 등록: 이벤트를 단 하나 밖에 지정할 수 없는 단점이 있다.
03. 여러 개의 이벤트를 등록할 수 있다.

### element에 직접넣기
```js
<button onClick="plus()"></button>
<script>
    const plus = () => {
        console.log("hello")
        return 
    }
</script>
```

### DOM속성으로 넣기
```js
const btn = document.querySelector(".btn")
console.log(btn)

btn.onclick = function () {
    console.log("hello world!")
    alert("hello world!")
}

const btn2 = document.querySelector(".btn")
console.log(btn2)
```

### addEventListener
여러개의 이벤트를 등록할 수 있다.
```js
<input type = "button" id="btn" value="click">
const chop = document.querySelector("input")
chop.addEventListener("event", 함수값)
```


### removeEventListener
JavaScript에서 addEventListener를 사용해 이벤트를 추가한 경우 반대로 `removeEventListener`를 사용하여 제거할 수 있다.
```js
// 기본형태
removeEventListener(이벤트종류, EventListener함수, 옵션: 선택)

// 예제
먼저 Event가 걸려 있는 요소에 접근하고, 요소로부터 Event 제거함수를 꺼내 실행한다.
const ev = document.querySelector("div")
ev.removeEventListener()

// 하나의 요소에 두가지 이벤트가 적용되어있는데, 하나의 이벤트만 제거하고 싶은 경우
<input id="chopBtn" type="button" value="+">
const func1 = document.querySelector("#chopBtn")
func1.addEventListener("click", )

document.querySelector("#chopBtn").removeEventListener("click", )
```

```js
const btn = document.querySelector('.btn')

btn.removeEventListener()

let a = 'hello world'
Element.removeEventListener(이벤트명:string, 함수값:function)
```

### Event 객체
DOM과 관련된 이벤트가 발생하면 관련 정보는 모두 event객체에 저장된다.
이벤트가 객체란 이벤트가 일어나는 요소 그 자체를 의미한다. 이벤트는 해당 타입의 이벤트에 대한 상세 정보를 저장하고 있다.(이벤트가 발생하면 이벤트에 대한 정보를 가지고 있는 객체)
모든 이벤트 객체는 이벤트의 타입을 나타내는 type프로퍼티와 이벤트의 대상을 나타내는 target프로퍼티를 가진다.
이벤트 객체는 이벤트리스너가 호출될 때 인수로 전달된다. 이벤트가 발생하면, 이벤트 객체는 동적으로 생성되어 이벤트 핸들러에 인자로 암묵적으로 전달된다.
이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만든다. 이벤트 객체에 이벤트에 관한 상세정보를 넣은 다음 핸들러에 인수 형태로 전달한다.


EventListener가 이벤트 객체를 전달받는 방법 3가지
01. 이름을 가진 EventListener 함수의 경우

02. 익명 함수의 경우

03. HTML 태그의 리스너 경우

```js
<input type="button" value="btn" id="a">

<script>
    const b = a.document.querySelector("a")
    // 매개변수명은 이벤트 객체의 의미로 `e`, `event`를 많이 사용한다.
    b.onclick = function alpha(e){
        alert(event.type + event.currentTarget)
    }
</script>
```

주요속성
# target
이벤트를 발생시킨 객체를 반환

# type
이벤트의 이름을 반환

# clientX
이벤트가 발생한 X 좌표값을 반환(브라우저 기준)

# clientY
이벤트가 발생한 Y 좌표값을 반환(브라우저 기준)

# screenX
이벤트가 발생한 X 좌표값을 반환(스크린 기준)

# screenY
이벤트가 발생한 Y좌표값을 반환(스크린 기준)

# button
마우스 왼쪽, 가운데, 오른쪽 버튼값을 반환
# altKey
alt키가 눌러졌을 때 true값을 반환
# ctrlKey
ctrl키가 눌러졌을 때 true값을 반환
# shiftKey
shift키가 true값을 반환

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

### e.target.value
e.target.value는 주로 폼요소에서 사용자의 입력 값을 가져오기 위해 사용된다.
폼 요소는 사용자로부터 데이터를 입력받는 역할을 하는 HTML요소로, 
예를 들어 텍스트 입력필드<input type="text">, 체크박스<input type="checkbox">, 
라디오버튼 <input type="radio">, 셀렉트 박스<select> 등이 있다.

폼 요소에 사용자가 입력한 값을 가져와야할 때, 이벤트 핸드러 함수에서 e.target.value를 사용하여 
값을 가져올 수 있다.

일반적으로 input이벤트나 change이벤트와 함께 사용된다.

예를 들어 텍스트 입력 필드에 사용자가 이름을 입력하는 경우 input 이벤트 핸들러에서
e.target.value를 사용하여 입력된 이름을 얻을 수 있다. 이 값을 변수에 저장하거나 다른 처리에 사용할 수 있다.

```js
function handleInputChange(event){
    let userInput = event.target.value
}
```

### e.target.value와 document.querySelector의 차이점
>사용목적
document.querySelector: 요소 자체를 선택하기 위해 사용
e.target.value: 이벤트 핸들러 함수에서 이벤트가 발생한 요소의 값을 가져오기 위해 사용된다.

>사용방법
document.querySelector는 요소를 선택하고 그 값을 가져오는 두 단계를 거친다.
먼저 원하는 요소를 선택한 다음 해당 요소의 value속성을 가져와야한다.
반면에 e.target.value는 이벤트 객체(e)의 target속성을 통해 이벤트가 발생한 요소를 직접 접근하고
해당 요소의 value속성을 바로 가져온다.

따라서 사용자 입력 값을 가져오는 데 관련이 있는 경우 이벤트 핸들러 함수 내에서 e.target.value를 사용하는 것이 
일반적으로 더 편리하고 직관적이다. 반면에 document.querySelector는 요소의 선택과 값을 가져오는 두 가지 작업을 별도로
수행해야하므로 특정 요소를 명시적으로 선택해야 할 때 또는 DOM에서 값이 아닌 다른 속성이나 요소를 찾아야 할 떄 유용하다.

=> document.querySelector와 e.target.value 모두 값의 획득에 사용될 수 있지만, document.querySelector는 `요소 선택`에
더 중점을 두고 있고, e.target.value는 이벤트 핸들러 함수 내에서 이벤트가 발생한 `요소의 값`을 가져오는 데 특화되어 있다.


### setAttribute 요소에 속성을 추가하거나 수정해주는 메서드
js에서 사용되는 메서드로 HTML요소에 속성(attribute)을 추가 또는 수정할 수 있다.
해당 메서드는 Element객체의 메서드로 사용되며, Element는 html요소를 나타내는 
자바스크립트 객체이다.

setAttribute메서드는 두개의 매개변수를받는다.
첫번째 매개변수는 속성의 이름이다.
두번째 매개변수는 해당 속성에 할당할 값이다.

```js
const divElement = document.createElement("div")
divElement.setAttribute("id", "myDiv")
```
위의 코드를 실행하면 아래와 같은 HTML요소가 생성된다.
```html
<div id="myDiv"></div>
```

### 이미 존재하는 속성을 수정할 경우
```js
const element = document.getElementById('myElement')
// class속성의 값을 newClass로 변경한다.
element.setAttribute("class", "newClass")
```

### switch 조건문
if...else문의 조건식이 반드시 불리언 값으로 평가되는 방면, switch문의 표현식은 불리언 값보다는
문자열, 숫자 값인 경우가 많다. switch문은 논리적 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용한다.

> 기본문법
```js
// switch문의 condition을 평가하여 그 값과 일치하는 표현식을 갖는 case문으로 실행순서가 이동된다.
switch(condition){
    // condition의 값이 value1인 경우 statement1을 실행
    case value1:
        array1
        break;
    // condition의 값이 value2인 경우 statement2를 실행
    case value2:
        array2
        break;
        ...
    // 그 어느 것도 아니라면 default가 적용되어 statement3을 실행
    default:
        statement3;
}
```
=> 조건이 일치하여 break를 만나면 그 이후는 비교하지 않으며 switch문이 종료된다.
default문은 switch문의 가장 마지막에 위치하므로 default문의 실행이 종료되면 switch문을 빠져나간다. 따라서 break를 생략해준다. default는 선택사항이다.

```js
const month = prompt("월을 입력하세요")
const season 

// parseInt: 입력된 값을 정수로 변환해준다.
switch(parseInt(month)){
    case 12:
    case 1:
    case 2:
        season = "겨울"
        break;

    case 3:
    case 4:
    case 5:
        season = "봄"
        break;

    case 6:
    case 7:
    case 8:
        season = "여름"
        break;

    case 9:
    case 10: 
    case 11: 
        season = "가을"
        break;

    // 유효하지 않은 월이 입력된 경우에 실행된다.
    default:
        season = "올바른 월을 입력하세요."
        break;
}

console.log("입력한 월은" + season + "입니다.")
```