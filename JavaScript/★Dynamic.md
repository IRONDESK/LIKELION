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
