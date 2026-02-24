//Q6. 다음 코드에서 각 숫자에 1을 더한 새로운 배열을 만들어 주세요 (map)

const numbers = [1, 2, 3, 4, 5];
const incrementedNumbers = numbers.map((number) => number+1);

console.log(incrementedNumbers);

//Q7. 다음 코드에서 짝수만 필터링된 새로운 배열을 만들어 주세요 (filter)
const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter( (number2) => number2%2 == 0);
console.log(evenNumbers);

// Q8. 다음 코드에서 각 문제를 풀어보세요. (`find`)
// 1. 전공이 "Physics"인 학생의 정보를 찾으세요.
// 2. 이름이 "David"인 학생의 정보를 찾으세요.

// 학생들의 정보가 담긴 배열

const studentList_quiz = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 21, major: "Mathematics" },
  { name: "Charlie", age: 23, major: "Physics" },
  { name: "David", age: 20, major: "Chemistry" },
  { name: "Eva", age: 22, major: "Biology" }
];

// 1. 전공이 "Physics"인 학생을 찾으세요.
const physicsStudent = studentList_quiz.find((student) => student.major == "Physics");

console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },

// 2. 이름이 "David"인 학생을 찾으세요.
const davidStudent = studentList_quiz.find((student) => student.name == "David");


console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },