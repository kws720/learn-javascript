const daysOfWeek = ["월요일","화요일","수요일","목요일","금요일","토요일","일요일"];
console.log("🚀 ~ daysOfWeek:", daysOfWeek);

const students = ["김완수","김태희","송혜진","신수진","임은혜"];
console.log("students 갯수(size) :", students.length);

// 미션 : students 배열에서 본인 이름 꺼내와서 콘솔에 찍기

console.log("내 이름은 : ", students[0]);

const student = {
  "name" : "김완수", 
  "age" : "42",
  isMale : true,
  subjects : ["HTML","CSS","JAVASCRIPT"]
};
console.log(student);
console.log("이름은 ",student.name, "나이는 ", student.age, "교육과정은", student.subjects);

// 미션 : 과목 배열 뽑아와서 콘솔에 찍어보기


for(let j=0;j<student.subjects.length;j++){
  console.log("subject 과목은 ", student.subjects[j]);
}

function gugudan(val){
  const arrGugudan = [];

  for(let i = 1;i <= 9; i++){
    arrGugudan[i-1] = val * i;
    console.log(val + "단 " + i + "번째 : " , arrGugudan[i-1]);
  }
}
      