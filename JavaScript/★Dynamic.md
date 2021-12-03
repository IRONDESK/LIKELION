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
