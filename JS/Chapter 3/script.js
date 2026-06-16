//  for (let count = 1; count <= 10000; count++) {
//     console. log("Apna College"); //5 execute
// }
// console.log("loop has ended");


// While loop
// let i = 5;

// while (i <= 10){
//     console.log("Apna College");
//     i++;
// }

// do While Loop

// do {
// console. log("Apna College");
// i++;
// } while (i <= 10);


//for in loop
let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for(let key in student){
    console.log("key=",key, "value=", student[key]);
}