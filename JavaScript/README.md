## 변수(형, type)
- **Array**(배열) 
  * 형태 : `['하나', '둘', '셋'], [100, 200, 300]`
  * 호출 : `변수명, 변수명[0], 변수명[0][0] (변수명[index])`
- **String**(문자열)
  * 형태 : `'abcde', "abcde",｀abcde｀`
  * 호출 : `변수명, 변수명[0] (변수명[index])`
- **Number**(숫자)
  * 형태 : 10, 10.123
  * 호출 : 변수명
  * 일반적 숫자 뿐 아니라, `Infinity`, `-Infinitiy`, `NaN`이 '특수 숫자값'으로 포함됨.
- **Boolean**(논리값)
  * 형태 : `true`, `false`
  * 호출 : 변수명
- **Object**(객체)
  * 형태 : ``{
              "지역이름": "전국",
              "확진자수": 24889,
              "격리해제수": 23030,
              "사망자수": 438,
              "십만명당발생율": 48.0
            }``
  * 호출 : `변수명`, `변수명.지역이름`, `변수명['지역이름']` (`변수명.key`, `변수명[key]`)
- **undefine** : undefind
- **null** : object

## 산술연산(+, -, /, *, , %)
## 논리연산(!, &&, ||)
## 비교연산(==, !=, >, >=, <, <=, ===, !==)
## 조건문(if, else if, else, switch)
## 반복문(for, for in, for of, while, do while, forEach, break, continue)
### for문
``` javascript
for (let i = 0; i < 10; i++) {
    console.log(i)
}
```
``` javascript
let a = [10, 20, 30, 40];
for (let i of a) {
    console.log(i);
} // 결과 : [10, 20, 30, 40]

for (let i in a) {
    console.log(i);
} // 결과 : [1, 2, 3, 4]

a.forEach(e => console.log(e**2));
// 결과 : [100, 400, 900, 1600]

```

### while문
``` javascript
let x = 0;
while (x < 10) {
    console.log(x);
    x++;
}


let x = 0;
do {
    console.log(x);
    x++;
} while (x < 10)

```
 * (실습) **구구단 만들기**
``` javascript
let i = 2
let j = 1
while (i < 10) {
if (i == 5){
    break;
  }// 구구단 4단까지만 나오게 함
    document.write(`${i} X ${j} = ${i*j} <br>`);
    j++
    if (j == 10) {
        i++
        j = 1
    }
}

```
### break와 continue
``` javascript
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
}

for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log(i);
}
```

## 함수
### 기본함수
```js
function add(x, y){
    return x + y;
}

add(3, 5)
```
 * **전달인자**(argument) : 3, 5
 * **매개변수**(parameter) : x, y  ``// 여기서 x, y를 보통 한국에서는 인자``
 * 
### 콜백함수
```js
function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

function cal(a, b){
    return a(10, 10) + b(10, 10);
}

cal(add, mul);
```

### 화살표함수
```js
function add(x, y) {
    return x + y
}

let addArrow = (x, y) => x + y;
- 익명함수 아님
// 기명 함수
let aa = function sum(x, y) {
    return x + y
}

// 익명 함수인것 같지만 바뀜
let bb = function(x, y) {
    return x + y
}
// ES5에서는 빈 문자열이었는데 ES6에서 name 값을 가지는 것으로 바뀌었습니다.
let cc = (x, y) => x + y;
```

## 선언
 * ``js let x`` : 변수로 사용하세요.
 * ``const x`` : 변하지 않는 상수값
 * ``var x`` : 전역에서 사용할 변수값, **실무에서 되도록 사용하지 않을 것!**

## 전개표현식 사용
``` javascript
function add(...x){
    return x;
}

add(1, 2, 3, 4, 5)
```
## 블록스코프
``` javascript
if (true){
    let what = 100;
}
console.log(what); // not defined error
// 안에서 선언된 변수는 일종의 지역변수
```

## 정규표현식
```js
prompt('hello?') // 'hi'
comfirm() // VM188:1 Uncaught ReferenceError: comfirm is not defined
confirm('hi')  // true
alert('hello')  // undefined
```
