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