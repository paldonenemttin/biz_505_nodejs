// JS에서  (Json)type 객체 만들기

// blank 객체
let 객체1 = {};

// blank 객체에 변수와 값을 동시에 추가하기
// 이름 전화번호 라는 변수를 객체1에 생성하고
// 각각에 값을 저장한다
객체1.이름 = "이몽룡";
객체1.전화번호 = "9876540";
//초기값이 있는 객체
let 객체2 = {
  이름: "홍길통",
  전화번호: "123456",
};

console.log(객체1);
console.log(객체2);

console.table(객체1);
console.table(객체2);

const 콘솔 = (m) => console.log(m);
콘솔(300 * 300);
