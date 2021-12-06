## This
 * 함수를 호출한 객체
```js
aboutThis는 window 객체 안에 있는 메소드
/// aboutThis는 window 객체 안에 있는 메소드
```
```js
let myObj = {
  val1: 100,
  func1: function(){ console.log(this)}
}

myObj.func1();
```

## Scope
* 전역 스코프
* 함수 스코프
* 블록 스코프 : ES6부터 새로 생긴 스코프

### 전역 스코프
 * 범위 : 어디서든 접근 가능함
```js
var example;

example;
function func() {
  example;
}
```

### 함수 스코프
 * 범위 : 함수 내에서만 접근 가능함
```js
function test() {
    var val1 = 'Hello World!';
    }
val1; // val1 is not defined
```

## Closure
 * 폐쇄된 함수 내의 데이터에 접근하기 위한 테크닉
 * 함수에 함수가 있을 경우, 자식은 부모 함수에 접근하지만 부모는 자식 함수에 접근하지 못함.
```js
function myFunc(){
//----클로져 ----
	var val1 = "hi"
	return val1 // return을 통해 함수의 외부에서 접근 가능
}
myFunc()
```
 * 클로저 함수 : 클로저에 접근할 권한을 갖는 함수.
```js
function myFunction(){
  var val1 = "hello";
  return { getVal1 : function(){return val1} }
            // getVal1의 value값인 함수를 클로저 함수
            // {key: value}에서 value가 함수면 key는 함수명
}
```

## Array 채우기

```js
Array(100).fill(0).map((value,index) => value + index)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
```
```js
'.'.repeat(9).split('.')
// ['', '', '', '', '', '', '', '', '', '']

## Math
```js
Math.ceil(9.2) // 올림
// 10

Math.ceil(-9.2) // 올림(음수에서 주의)
// -9

Math.floor(9.2) // 버림
// 9

[Math.round(3.4), Math.round(3.7)] // 반올림
// [3, 4]

Math.max(1,2,3,4,5,10)
// 10

Math.min(1,2,3,4,5,10)
// 1

Math.min([1,2,3,4,5,10])
// NaN

Math.min(...[1,0.7,2,3,4,5,10]) // array로 넣을 때는 '...'을 앞에 넣는다
// 0.7
```

## reduce()
```js
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current);

console.log(result) // 15

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum * current);
console.log(result) // 120
```
