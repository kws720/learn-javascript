// 변수
// let username = "김완수";
// console.log("username : " + username);

// username = "세하주하아빠";
// console.log("username : " + username);

// const arrVar = { name : "김완수", age : 43 };
// console.log("이름 : " + arrVar.name + ", 나이 : " + arrVar.age);
// arrVar.name = "세하주하아빠";
// arrVar.age = 42;
// console.log("이름 : " + arrVar.name + ", 나이 : " + arrVar.age);

// const num = 10;

// console.log("🚀 ~ num:", num, typeof(num));

// const str = "안녕하세요";
// console.log("🚀 ~ str:", str, typeof(str));

// const bool = false;
// console.log("🚀 ~ bool:", bool, typeof(bool));

// const empty = null;
// console.log("🚀 ~ empty:", empty, typeof(empty));

// let user = "";
// console.log("🚀 ~ user:", user);

const fnTest = (username) => {
  if(username.value == "" || username.value == null  ){
    alert("사용자 이름을 입력해주세요.");
  }else{
    console.log(`사용자 이름 : ${username.value}`);
    }
}

const fnHello = () => {
    console.log("Hello World");
}

// function fnTest(username){
  // if(username.value == "" || username.value == null  ){
  //   alert("사용자 이름을 입력해주세요.");
  // }else{
  //   console.log("사용자 이름 : " + username.value);
  //   }

// }

// const add = (num1,num2) => {
//   return num1+num2;
// }
// const a = add(5,1);
// console.log("🚀 ~ a:", a);

let calcVal = "";
const calc = (num1,num2,yunsanja) => {
  if(yunsanja.value == "sum"){
    calcVal = Number(num1.value) + Number(num2.value);
  }else if(yunsanja.value == "minus"){
    calcVal = Number(num1.value)-Number(num2.value);
  }else if(yunsanja.value == "multiple"){
    calcVal = Number(num1.value)*Number(num2.value);
  }else if(yunsanja.value == "divid"){
    calcVal = Number(num1.value)/nNumber(num2.value);
  }else{
    console.log("잘못입력된 연산자입니다.");
  }
  console.log("🚀 ~ calc ~ calcVal:", calcVal)  
};