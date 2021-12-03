
// 호이스팅 : function으로 선언된 함수는 맨위로 모아줌
// 함수가 더 나중에 있지만, 이게 되네..

// console.log(add(10, 20));
// function add(x, y) {
//     return x + y;
// }// 30

// console.log(mul(10, 20));
// let mul = function (a,b) {
//     return a * b;
// }// Error

///////////////////////////////////
//// 로또

function randomNum(min, max) {
    return Math.floor(Math.random()*(max-min) + min)
}

function LottoMake() {
    let numArray = []
    while (numArray.length <= 5) {
       let num = randomNum(1,46)
       numArray.includes(num)? {} : numArray.push(num) 
    }
    numArray.sort((a,b) => a-b)
    return numArray
}

console.log(LottoMake())