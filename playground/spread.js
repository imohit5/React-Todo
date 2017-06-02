// function add(a,b){
//   return a+b;
// }
//
// console.log(add(3,1));
//
//
// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = ['tom', 'jerry'];
// var groupB = ['tim'];
//
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Tim', 25];
var personTwo = ['Jen', 29];

function Hi(name, age) {
  return `Hi ${name}, you are ${age}`;
}

console.log(Hi(...person));
console.log(Hi(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Tim', ...names];

final.forEach(function(name){
  console.log(`Hi ${name}`);
});
