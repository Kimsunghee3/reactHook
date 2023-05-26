`데이터를 영구 저장하는 방법`
자바스크립트에서 데이터를 영구 저장하는 방법으로 `storage`, `localStorage`를 사용할 수 있다.

### storage()
storage타입은 key-value쌍을 저장하도록 설계되어있다. storage타입은 object와 같은 추가 메서드를 가지고 있다. storage도 결국 window안에 있으며, window를 생략하고 localStorage객체에 접근이 가능하다. 문자형 데이터만 지원이 가능하다는 점이 있다. 따라서 객체형데이터를 저장하려고 할 때는 문자형으로 바뀌므로 사용이 불가능한데 이때 JSON형태로 변환해주면 사용이 가능하다.

로컬 스토리지에 저장된 데이터는 웹페이지를 닫는다고 해서 사라지지 않으므로 불필요한 데이터가 남지 않도록
직접 청소를 해줘야한다.
### 데이터 청소
```js
localStorage.clear()
```

> options
```js
// 키에 데이터 쓰기
localStorage.setItem("key", value)

// 키로부터 데이터 읽기
localStorage.getItem("key")

// 키의 데이터 삭제
localStorage.removeItem("key")

// 모든 키의 데이터 삭제
localStorage.clear()

// 저장된 키,값 쌍의 갯수
localStorage.length
```