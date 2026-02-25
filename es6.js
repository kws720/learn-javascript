// const greeting = (username2 = "사용자" ) => {
//   console.log(`안녕하세요 ${username2} 님!`);
// }

// greeting();
// greeting("김완수");

const user = {
  userId : ["김완수","홍길동","유해진","장보고","이순신","장영실"],
  isLoggedIn : true, // 로그인 여부
  role : "admin" // 다른값으로 "user", "guest"
}
const greeting = (username2 = "사용자" ) => {
  console.log(`안녕하세요 ${username2} 님!`);
  let cnt = 0;
  
  // 관리자 페이지 접근 코드
  if(user.isLoggedIn && user.role == "admin"){
    for(let i=0; user.userId[i]; i++){
      if(`${username2}` == user.userId[i]){
        // 로그인 된 상태이면서, role이 admin인 경우 실행
        console.log("✅관리자 페이지에 접근할 수 있습니다.");
        alert("✅관리자 페이지에 접근할 수 있습니다.");
        cnt++;
      }
    }
  }

  if(cnt == 0){
    console.log("✅관리자 페이지에 접근할 수 없습니다.");
    alert("✅관리자 페이지에 접근할 수 없습니다.");
  }
}

const person = {
  age : 16,
  isParentPermission : true
};
const canAccess = personalbar.age >= 18 || person.isParentPermission;
console.log("🚀 ~ canAccess:", canAccess);

// 구조분해 할당
const colors = ["red","blue"];


const [first,second] = colors;

console.log("🚀 ~ first:", first);
console.log("🚀 ~ second:", second);

const todoItems = {
  id : 123,
  todo : "React학습",
  isComplete : false,
};

// const id = todoItem.id;
// const todo = todoItem.todo;
// 해당 페이지에서 다른 변수명으로 사용하고 싶을때 
const {id,todo, isComplete:todoIsComplete} = todoItems;

console.log("🚀 ~ todoItem.id:", id)
console.log("🚀 ~ todoItem.todo:", todo)
console.log("🚀 ~ isComplete:", todoIsComplete)
