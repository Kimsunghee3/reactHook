
            Window
           /   |   \
         /     |    \
      DOM     BOM   JavaScript

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

### 깊은 복사

### 얕은 복사

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