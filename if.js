const fnScore = (score) => {
  let grade = "";
  if(score.value > 100){
    alert("점수는 최대 100점까지 입력가능합니다. 입력된 점수를 확인해주세요.");
    return;
  }
  // if(score.value > 90  ){
  //   grade = "A";
  // }else if(score.value > 80 ){
  //   grade = "B";
  // }else if(score.value > 70 ){
  //   grade = "C";
  // }else{
  //   grade = "D";
  // }

  score.value > 90 ? grade = "A" : score.value > 80 ? grade = "B" : score.value > 70 ? grade = "C" : grade = "D" 
  returnGrade(grade);
}

function returnGrade(grade){
  alert("당신은 " + grade + "등급입니다.");
  
}