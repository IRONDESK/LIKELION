// https://ko.javascript.info/ 소개
// https://www.w3schools.com/ 소개

// 자바스크립트로 출력하는 방법
// let age = 10; //지금은 다루지 않습니다.
// const pi = 3.141592; // 지금은 다루지 않습니다.
// var name = '사용자';
// var age = 20;

// document.getElementById('title').innerHTML = 'Welcome to JS100제';
// document.write("20 + 20");


// window.alert(name);


// console.log(age);
// 한 줄 주석
/* 주석
입니다. */

var myVal1 = 'kdkdkdkdkkd' + "아아아아아아";

var myVal2 = 192828393928;
var myVal3 = [1, 2, 3, 4, 5, 6];
var myVal4 = { val1: 1, val2: 2 };
var myVal5 = function () { };

var myVal6 = [1, 2, 3],
    myVal7 = [4, 5, 6];


var myVal8 = "재현선생님";
var MyVal8 = "호준선생님";

//alert(myVal8);
//alert(MyVal8);



var 변수하나 = 20;
var 변수둘 = 10;
var 변수셋 = 2;
// var은 쓰지 말기

document.write('변수하나 : ', 변수하나);
document.write('<br>');
document.write('변수둘 : ', 변수둘);
document.write('<br>');
document.write('변수셋 : ', 변수셋);
document.write('<br>');
document.write('변수하나+변수둘 : ', 변수하나+변수둘);
document.write('<br>');
document.write('변수하나-변수둘 : ', 변수하나-변수둘);
document.write('<br>');
document.write('변수하나/변수둘 : ', 변수하나/변수둘);
document.write('<br>');
document.write('변수하나*변수둘 : ', 변수하나*변수둘);
document.write('<br>');
document.write('변수하나**변수셋 : ', 변수하나**변수셋);
document.write('<br>');
document.write('변수하나%변수셋 : ', 변수하나%변수셋);


//ES6
const 이름 = '이호준';
const 소속 = '제주코딩베이스캠프 운영진입니다.'


let 주소 = '서울';
document.write('<br>', 주소);

주소 = '제주';

document.write(이름, '<br>');
document.write(소속, '<br>');
document.write(주소, '<br>');

document.write(소속[2], '<br>');
document.write(소속[3], '<br>');

//숫자형 (Number)
var num = 10;

document.write(num, '<br>');  // 10
document.write(num/3, '<br>');  // 3.3333..
document.write(parseInt(num/3), '<br>');  // 3

/* 숫자형의 사칙연산 */
document.write("더하기 : ", 2 + 2.5, '<br>');  // 4.5
document.write("빼기 : ", 5 - 7, '<br>');  // -2
document.write("곱하기 : ", 3 * 2, '<br>');  // 6
document.write("나누기 : ", 2/2, '<br>'); // 1

/*특수 숫자 값*/
document.write("무한대 : ", 1/0,'<br>'); // Infinity
document.write( "숫자가 아님" * 2 , "여기야"); 
// NaN, 문자열을 숫자로 나누면 오류가 발생합니다.


// let number = 1e9;
// let number = 123e-5;
// let number = 1.23e9;
// let number = 0b1010; //0, 1 -> 10
// let number = 0o12; //0 ~ 7 -> 10
// let number = 0xff; //0 ~ f -> 10
// let number = parseInt('13', 10)
let number = parseFloat('13.310px', 10) //진법

document.write(number, '<br>');
document.write(0.1 + 0.2 == 0.3, '<br>');
document.write(9999999999999999999, '<br>');

//////////////////////////////////////////////////////////////////////////
document.write('<br><br><br><br>')
// Number 관련 함수
let n = 10000;
let nFloat = 10000.123123123;
let s = '10,000,000';

document.write(`n : ${n} <br>`);
document.write(`n.toLocaleString() : ${n.toLocaleString()} <br>`); //세자리마다 점으로 끊어줌
document.write(`s : ${s} <br>`);
document.write(`s.replace(/,/g, '') : ${s.replace(/,/g, '')} <br>`); //끊어진 점을 빈칸으로 replace
document.write(`parseInt(s, 10) : ${parseInt(s, 10)} <br>`);

document.write(`n.toFixed(10) : ${n.toFixed(10)} <br>`);
document.write(`nFloat.toFixed(3) : ${nFloat.toFixed(3)} <br>`);
document.write(`nFloat.toExponential(4) : ${nFloat.toExponential(4)} <br>`);

document.write(`Number(true) : ${Number(true)} <br>`);
document.write(`Number(false) : ${Number(false)} <br>`);
document.write(`Number('') : ${Number('')} <br>`);
document.write(`Number(' ') : ${Number(' ')} <br>`);
document.write(`Number('hello') : ${Number('hello')} <br>`);
document.write(`Number('10 20') : ${Number('10 20')} <br>`);
document.write(`Number('10     ') : ${Number('10     ')} <br>`);
document.write(`Number('     10') : ${Number('     10')} <br>`);
document.write(`Number('     10     ') : ${Number('     10     ')} <br>`);

document.write(`Math.PI : ${Math.PI} <br>`);
document.write(`Math.round(4.7) : ${Math.round(4.7)} <br>`);
document.write(`Math.pow(2, 8) : ${Math.pow(2, 8)} <br>`);
document.write(`Math.sqrt(64) : ${Math.sqrt(64)} <br>`); //루트
document.write(`Math.abs(-5) : ${Math.abs(-5)} <br>`); //절댓값
document.write(`Math.random() : ${Math.random()*10} <br>`);
document.write(`Math.max(10, 20, 30, 40, 50) : ${Math.max(10, 20, 30, 40, 50)} <br>`);
document.write(`Math.min(10, 20, 30, 40, 50) : ${Math.min(10, 20, 30, 40, 50)} <br>`);