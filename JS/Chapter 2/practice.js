// let number = prompt("Enter a number");

// if(number % 5 === 0){
//     console.log("Yes, it is a multiple of 5");
// }else{
//     console.log("It is not a multiple of 5");
// }


let score = prompt("Enter you score");
let grade;

if(score >= 90 && score <=100){
    grade = "A";
}else if(score >= 70 && score <= 89){
    grade = "B";
}else if(score >= 60 && score <= 69){
    grade = "C";
}else if(score >= 50 && score <= 59){
    grade = "D";
}else{
    grade = "E";
}

console.log(grade);