// TODO
/* 
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/
// started code
/* 
function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray;
}
*/
function createArray(number) {
  let newArray = [];

  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}
console.log(createArray(2, 3, 4, 9, -2, 34));
