// Arithmetic operatins

// let a = 10;
// let b = 20;

// console.log("a+b =",a+b);
// console.log("a-b =",a-b);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b); 

// //modulus
// console.log("a%b =", a%b);
// //Exponentiation
// console.log("a**b =", a**b);

// //Unary operato rs
// a++
// console.log(a);


// b--;
// console.log(b)


//Comparison Operator




//Logical Operators
// let a = 6;
// let b = 5;

// console. log("cond1 && cond2 = ", a < b && a === 6);

// console.log("!(6<5) =", !(a<b)); //For opposite


//Conditional Statements
// let age = 16;

// if(age >= 18){
//     console.log("You can vote");
// }else{
//     console.log("You can't vote");
// }


//Ternary operator

// let age = 16;

// let result = age >= 18 ? "adult" : "not adult";

// console.log(result);




//Switch

let expr = "Apples";

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");

alert("hello");