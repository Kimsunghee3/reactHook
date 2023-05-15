### 호출 스케줄링
일정 시간이 지난 후에 원하는 함수를 예약 실행(호출)할 수 있게 하는 것을
호출 스케줄링이라고 한다.


### setTimeout
일정 시간이 지난 후에 함수를 실행하는 방법
단 한번만 실행된다.
```js
// 3초 뒤에 실행된다.
setTimeout(function a(){
    console.log("헬로우~")
},[3000])
```

### setInterval
일정 시간 간격을 두고 함수를 실행하는 방법
두번째 인자 값 밀리세컨드가 충족되었을 때 마다 실행된다.
```js
// 3초마다 실행된다.
setInterval(function b(){
    console.log("hello world!")
}, 3000)
```

>### Single Thread
프로세스가 단일 스레드로 동작하는 방식이다.

<br />

> ### Multi Thread
두 개 이상의 스레드가 프로세스 내부에서 자원을 공유하여 작업을 수행한다.

<img src="../../img/eventloop.png">

- heap: 메모리 할당이 발생하는 곳 함수를 선언하게되면 heap에 담기게된다.

- call Stack: 실행된 코드의 환경을 저장하는 자료구조, 함수를 호출하게 되면
call Stack에 push된다.

- web APIS: setTimeout이 call Stack에 들어와 실행되면 Browser API인
timer를 호출한다. 브라우저가 제공하는 API로 DOM, AJAX, setTimeout등이 있다.

- event Table: 특정 event가 발생했을 때 어떤 callback 함수가 호출되야 하는지를 알고 있는 자료구조이다.

- callback Queue: 이벤트 발생시 실행해야 할 callback 함수가 callback Queue에 추가된다.

- event Loop: call Stack과 callback Queue를 감시한다.
call Stack이 비어있을 경우, callback Queue에서함수를 꺼내 call Stack에 추가한다.


### promise 객체
promise는 자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있게 도와주는 객체이다.
callback함수의 단점을 보완하여 비동기처리에 사용되는 객체를 promise라 한다.
promise생성자 안에 두 개의 매개변수를 가진 콜백함수를 넣게 되는데 첫번째 인수는 작업이 성공(resolve)했을 때 성공임을 알려주는 객체이며, 두번째 인수는 작업이 실패했을 때 실패(reject)임을 알려주는 오류 객체이다.
promise는 코드에서 바로 값을 return 하지 않는 대신 promise를 return하여
최종적으로 나중에 값을 제공하는 것을 뜻한다.
-> 성공했을 때는 resolve 함수를 호출하고, 실패했을 때는 reject함수를 호출한다.
* executor: promise생성자 안에 들어가는 콜백함수를 executor라고 부른다.
```js
const promise = new Promise((resolve, reject) => {
    const data = fetch("http://google.com")
    // 요청이 성공하여 데이터가 있다면 실행된다.
    if(data){
        resolve(data)
    // 요청이 실패하여 데이터가 없다면 에러가 발생한다.
    }else{
        reject("Error")
    }
})
```
### Promise의 용도
일반적으로 HTTP를 호출할때 가장 많이 사용된다.
JavaScript엔진은 promise가 최종적으로 값을 return하기 전까지 `pending`상태가 return되고 JavaScript엔진은 다른 코드들을 실행하게 된다.

### promise의 3가지 상태
promise의 상태란 promise의 처리과정을 말한다. new Promise()로 promise를 생성하고
종료될 때까지 3가지 상태를 갖는다.
        
       fullFilled
          /   
pending -    
          \
       rejected

01. 실행전
Pending(대기): 비동기 처리 로직이 아직 미완료인 상태
아래와 같이 promise를 호출하면 pending상태가 된다. 이때 콜백함수의 인자로 resolve, reject에 접근할 수 있다.
```js
new Promise(function(resolve, reject){})
```

02. 실행 후 성공했을 때 
fullFilled(이행): 비동기 처리가 완료되어 promise가 결과 값을 반환해준 상태
콜백함수의 인자 resolve를 실행하면 fullFilled 상태가 된다.(완료상태)
이후 이행 상태가 되면 then()을 이용해 처리 결과 값을 받을 수 있다.
```js
new Promise(function(resolve, reject){
    resolve()
})
```

03. 실행 후 실패했을 때
rejected(실패): 비동기 처리가 실패하거나 오류가 발생한 상태
콜백 함수의 인자 reject를 실행하면 rejected 상태가 된다(실패 상태) 
이후 실패 상태가 되면 catch()를 이용해 error를 다룰 수 있다.
```js
new Promise(function(resolve, reject){
    reject()
})
```
### method chaining 후속 처리메서드
위와같이 만들어진 Promise객체는 비동기 작업이 완료된 이후에 다음 작업을 연결시켜 진행할 수 있다. 작업 결과에 따라 .then()과 .catch()메서드 체이닝을 통해 성공과 실패에 대한
후속처리를 진행할 수 있다. 

- .then: 첫번째 인자(fullFilled function), 두번재 인자(rejected function)를 넣어서 해당 함수를 동작시킨다.

- .catch: 하나의 콜백함수를 인자로 받는다. catch메서드 이후에도 method chaining이 가능하다. promise에서 발생하는 모든 에러처리를 담당한다. 

- .finally: promise가 settled된 상태에서 무조건 한번 실행된다.
콜백함수의 return값이 적용되지 않는다.


```js
const promise = new Promise((resolve, reject) => {
    // 처리할 내용
})

promise.then(
    // resolve가 호출되면 then실행
)
.catch(
    // reject가 호출되면 catch가 실행
)
.finally(
    // callback 작업을 마치고 무조건 실행되는 finally(생략가능)
)
```

### try catch


### 깊은 복사



### 얕은 복사
