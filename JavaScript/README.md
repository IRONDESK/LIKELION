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

 * (실습)**평균 계산하기**
   * `parseInt()` : 문자를 숫자로 바꿔줌.
```js
let data = '3, 4, 10, 12, 16'.split(',')
data // ['3', '4', '10', '12', '16']
let 합계 = 0
for (let i of data) {
    합계 += parseInt(i);
}
console.log(합계/data.length)
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
```

### 기명함수
```js
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

### 익명함수
```js
console.dir(function (x, y) {return x + y;})
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
 * 텍스트의 특정 패턴을 찾아내는 목적
 * https://regexr.com/5nvc2

## 리터럴
 * 리터럴은 코드에 보여지는 타입의 표현을 의미
 * 원래 배열을 생성하려면 ``new Array(4,5,6);``로 작성해야 하나, ``[4,5,6]``로 표현하는 배열
 * 마찬가지로 ``new Object()`` 의 리터럴 표현은 ``{}``
 * ``new Number(5)``의 리터럴 표현은 ``5``
 * ``new String("hello")``의 리터럴 표현은 ``"hello"``


## 상호작용
```js
prompt('hello?') // 'hi'
comfirm() // VM188:1 Uncaught ReferenceError: comfirm is not defined
confirm('hi')  // true
alert('hello')  // undefined
```

## new Date()
 * **주의** : 월(month)는 0부터 시작. `1월 = 0, 2월 = 1`
 ```js
 let d = new Date();
 d  // Wed Dec 01 2021 10:35:01 GMT+0900 (한국 표준시)
d.getFullYear()  // 2021
d.getMonth() // 11
d.getDate()  // 1
d.getDay()  // 3
// 일요일부터 0

d.getHours()  // 10
d.getMinutes()  // 35
d.getSeconds()  // 1
d.getMinutes()  // 35

```

## Array

```js
let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나']
let 과일2 = new Array(5);
let 과일3 = new Array('사과', '수박', '복숭아', '딸기', '바나나');

과일[0] // '사과'
과일[0] = '귤'
과일 // ['귤', '수박', '복숭아', '딸기', '바나나']
```
