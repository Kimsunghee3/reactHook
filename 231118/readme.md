### Board
화면 구성도 그려보기
게시판 수정 페이지제작


### 배열 함수(Array Method)
- sort
- join
- split
- reverse
- splice
- find
- filter
- map
- some/every
- reduce /reduceRight



### sort
배열을 요소를 정렬 해주는 메서드로 오름차순 내림차순으로 정렬한다.
```js
const arr = [5,3,2,4,1]
const a = arr.sort()
// [1,2,3,4,5]
console.log(a)
```


### join
배열의 모든 요소를 연결해 하나의 문자열로 만든다.
```js
const arr = ['a', 'b', 'c']

const join1 = arr.join()
// a,b,c,
console.log(join1)

const join2 = arr.join("")
// abc
console.log(join2)

const join3 = arr.join('/')
// a/b/c
console.log(join3)
```


** 배열에 값을 추가하는 메서드 **
### push
배열의 마지막에 요소추가, 배열의 크기 리턴
```js
const arr = [1,2,3] 
const push = arr.push(4) // return: 4
// [1,2,3,4]
console.log(push)
```

### unshift
배열의 처음에 요소추가, 배열의 크기 리턴
```js
const arr = [1,2,3]
const unshift = arr.unshift("hi") // return: 3
// ["hi",2,3]
console.log(unshift)
```
           

** 배열의 값을 제거하는 메서드 **
### shift
배열의 첫번째 요소를 제거한다, 제거된 요소 리턴
```js
const arr = [1,2,3,4]
const shift = arr.shift() // 1
// [2,3,4]
console.log(shift)
```


### pop
배열의 마지막 요소를 제거한다, 제거된 요소 리턴
```js
const arr = [1,2,4]
const pop = arr.pop() // return: 4
// [1,2]
console.log(pop)
```


### splice 배열요소 추가 삭제
Array.prototype.splice()메서드는 배열의 특정 위치에 배열요소를 추가하거나 삭제하는데 사용한다.
리턴 값은 삭제한 배열 요소이다. 삭제한 요소가 없을 경우 빈 배열을 반환한다.
```js
// 기본형태
// start: 수정할 배열 요소의 인덱스
// deleteCount: 삭제할 요소 개수, 제거하지 않을 경우 0
// el: 배열에 추가될 요소
arr.splice(start, deleteCount, el)

const arr = [1,2,3,4]

`add`
// 배열의 첫번째 요소를 선택하고 요소는 제거하지 않고 첫번째라는 텍스트를 추가해준다.
const add = arr.splice(1, 0, '첫번째')
// [1,'첫번째',2,3,4]
console.log(add)

`remove`
// 배열의 세번째 요소를 지정하고, 세번째 요소로부터 1번째뒤에 있는 요소를 선택 후 제거해준다.
// 네번째 텍스트를 추가해준다.
const remove = arr.splice(3, 1, "네번째")

// [1,2,3,"네번째"]
console.log(remove)
```

### slice