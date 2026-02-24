for(let i=0;i<5;i++){
  console.log(`${i}번째 실행중...`);
}

// 함수 반복 실행

const studentList = ["김완수","김태희","송혜진","신수진","임은혜"];

// const greeting = (username) => {
//   for(let z=0;z<studentList.length;z++){
//     console.log(`반갑습니다. ${username[z]}님!`);
//   }
// }

studentList.forEach((name, idx, studentList) => {
    console.log(name, idx);
  });


//greeting(studentList);

const names = [
  "alice",
  "bob",
  "charlie",
  "david"
];
// map : 기존 배열을 조작하여 새로운 배열을 리턴
const upperNames = names.map( (mapNames) => mapNames.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

// 미션
const addNamesEmoji = names.map( (mapNamesEmoji) => mapNamesEmoji.concat("⭐"));
console.log("🚀 ~ addNamesEmoji:", addNamesEmoji);

// filter : 배열안의 요소들 중 조건을 만족하는 요소들로 새로운 배열 리턴
// 이름 글자수가 5자 이상인 요소

const filterNames = names.filter( (name) => name.length >= 5  );
console.log("🚀 ~ filterNames:", filterNames);

// find : 배열안의 요소들 중 조건을 만족하는 첫번째 요소 반환, 조건을 만족하는 요소가 없으면 undefined 반환
const findNames = names.find((name) => name.length == 3 );
console.log("🚀 ~ findNames:", findNames);

// some/every : some - 조건이 하나라도 있으면 true, every - 모든 조건이 만족하면 true
const someNames = names.some((name) => name.length == 5 );
console.log("🚀 ~ someNames:", someNames);

const everyNames = names.every((name) => name.length >= 3 );
console.log("🚀 ~ everyNames:", everyNames);


// spread syntax
const mbtiTypes = ["INTP","ISFJ","ENTJ"];
// mbtiTypes.push("ISTJ");
const addMbtiTypes  = ["ISTJ", ...mbtiTypes ];

console.log("🚀 ~ addMbtiTypes:", addMbtiTypes);

const todoItem = {
  id : "123",
  todo : "JS실습",
  isComplete : false
}

const setTodoItem = {
  ...todoItem,
  pw : "123",
  isComplete : true // 이미 존재하는 키값인 경우는 수정
}
console.log("🚀 ~ setTodoItem:", setTodoItem);

