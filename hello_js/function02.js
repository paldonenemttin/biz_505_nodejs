// JS에서는 변수, 상수, 함수는 사용하기 전에
// 먼저 선언하라
const 함수1 = function () {
  console.log("기본 함수 선언하기");
};

// ES6+에서 권장하는 화살표 함수 선언하기
const 함수2 = () => {
  console.log("Arrow, 화살표 함수 선언하기");
};

// 매개변수가 있는 함수 선언하기
const 함수3 = function (num1, num2) {
  console.log(num1, num2, num1 + num2);
};

// 매개변수가 있는 함수 호출(실행하기)
함수3(100, 200);
함수3();

// a매개변수가 있는 화살표 함수 선언하기
const 함수4 = (num1, num2) => {
  console.log(num1, num2, num1 + num2);
};

// 매개변수가 1개만 있는 화살표 함수 선언하기
// pretterㄱ 적용이 안된다면 다음과 같이 선언가능
// 매개변수가 하나만 있으면 () 묶지 않아도 됌
//const 함수5 = num1 => {};

// return이 있는 함수 선언
const 리턴함수1 = function () {
  return 300;
};
리턴함수1(); // 결과를 알 수 없는 함수
// 함수를 실행하고 return된 결과를 변수 ret1에 담아라
let ret1 = 리턴함수1();
console.log(ret1);

// return이 있는 화살표 함수
const 리턴함수2 = () => {
  return 500;
};

// 화살표 함수의 매우 특별한 선언
// 함수 내부에 return 명령문 한개만 있는 경우
// 다른 명령은 일체 없는 경우
const 리턴함수3 = () => 500 + 500;

const ret5 = 리턴함수3();
console.log(ret5);

// 매개변수가 있고 return이 있는 화살표 변수
const 리턴함수4 = (숫자1) => {
  return 숫자1 + 숫자1;
};

let ret4 = 리턴함수4(7);
console.log(ret4);
const 리턴함수44 = (숫자1) => 숫자1 + 숫자1;

fetch("localhost:3000")
  .then((res) => res.json())
  .then((result) => console.log(result));

fetch("localhost:3000")
  .then((res) => {
    return res.json();
  })
  .then((result) => console.log(result));
