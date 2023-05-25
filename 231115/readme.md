### 댓글창 구현하기

### 필요한 기능들
01. 내용을 입력하고 submit버튼을 누르면 value값이 배열에 push되게끔

02. 댓글이 생성될 때마다 count값이 증가하게끔

03. 댓글을 입력하고 submit을 했을 때 입력내용이 화면에 생성되도록..!!


### Doing
01. 
빈 배열 생성 후 addComment의 내용을 불러와 넣어준다. 


```js
const addContent = document.querySelector(".commentForm").onsubmit = function(){
    let a = document.querySelector(".commentContent")

    // 서버호출이 불가능하므로 return false로 서버로 호출이 가기전에 프로그램이 종료되게끔 설정해주었다.
    return false
}
```

### 댓글 수정
