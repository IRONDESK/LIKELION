## 변수(형, type)
- **Array**(배열) 
  * 형태 : `['하나', '둘', '셋'], [100, 200, 300]`
  * 호출 : `변수명, 변수명[0], 변수명[0][0] (변수명[index])`
- **String**(문자열)
  * 형태 : `'abcde', "abcde",｀abcde｀`
  * 호출 : `변수명, 변수명[0] (변수명[index])`
  * 문자열로 만들기 : `+ ''`를 붙임. 예시) `3 + ''`, `[1, 2] + ''`
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
|단어|번역|의미|상단 예시|
|------|---|---|:---:|
|parameter|매개변수|함수와 메서드 입력 변수(variable)의 이름|`x`, `y`
|argument|(전달)인자|함수와 메서드의 입력 값(value)|`3`, `5`
* 함수를 **파**라미터로 **선**언하고 **아**규먼트로 **실**행한다!

```js
function add(a = 100, b = 200) {
    return a + b;
}

add(10, 20);  // 30
//함수에서 정의되었다 하더라도, 아규먼트가 우선함

add(10);  // 210
add();  // 300

```

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

과일[1][0]  // '수'
과일[1][0] = '불'
과일[1]  // '수박'
// Array는 변수[인덱스] = '' 꼴로 값을 바꿀 수 있지만, 요소의 일부를 바꾸지는 못한다.
```

### pop(), push()
```js
과일 = [‘사과’, ‘수박’, 복숭아’, ‘딸기’, ‘고구마’]

과일.pop() // [‘사과’, ‘수박’, 복숭아’, ‘딸기’] // 맨 뒤에서 빼기
과일.push(‘한라봉’) // [‘사과’, ‘수박’, 복숭아’, ‘딸기’, ‘한라봉’] // 맨 뒤에 넣기
과일.join('냠냠') // '사과냠냠수박냠냠복숭아냠냠딸기냠냠오렌지'
```

### slice(), splice()
```js
과일 = ['참외', '사과',  '수박', '복숭아', '딸기', '오렌지']
과일.slice(2,4);  // ['수박', '복숭아']

과일.splice(2,3);  // index가 2인 값부터 3개의 값
과일 = ['수박', '복숭아', '딸기']  // 과일이란 변수의 array가 아예 변경됨.

```

### concat()
 * array 변수를 합침. 다만 기존 변수를 바꾸는 것은 아니므로, 필요하다면 별도의 변수 지정해야 함.
```js
let 과일 = ['참외', '사과', '오렌지'];
let 제주과일 = ['귤', '한라봉', '천혜향'];

과일.concat(제주과일); // ['참외', '사과', '오렌지', '귤', '한라봉', '천혜향']
과일 // ['참외', '사과', '오렌지']
제주과일 // ['귤', '한라봉', '천혜향']
```

### sort()
 * `.sort()`는 기본적으로 사전식 정렬
```js
let data = [10, 20, 30, 11, 22, 25]
data.sort() // [10, 11, 20, 22, 25, 30]

data.push(111)
data.sort() // [10, 11, 111, 20, 22, 25, 30]
```

 * 오름차순/내림차순 정렬
```js
data.sort((a,b) => a-b) // 오름차순 [10, 11, 20, 22, 25, 30, 111]
data.sort((a,b) => b-a) // 내림차순 [111, 30, 25, 22, 20, 11, 10]
```

## Object
```js
let person = {
  //key: value
  name: '이호준',
  age: 10,
  height : 30,
  weight : 40,
이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'}
}
```

### Object.keys(), .values(), .entries()

* object의 key만 array로 가져오기
```js
Object.keys(person) // ['name', 'age', 'height', 'weight', '이력']
```

* object의 value만 array로 가져오기
```js
Object.values(person) // ['이호준', 10, 30, 40, {첫번째직장: '하나', 두번째직장: '둘'}]
```

* object의 key와 value를 array의 array로 묶어서 가져오기
```js
Object.entries(person) // [['name', '이호준'], ['age', 10], ... , ['이력': {첫번째직장: '하나', 두번째직장: '둘'}]]
```
