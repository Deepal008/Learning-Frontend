// function myFunction(){
//     console.log("Deepal");
//     console.log("I am learing JS");
// }


// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("Deepal");


//Arrow function

// const arrowSum = (a, b) => {
//     console.log(a+b);
// };

// let  arrowMulti = (a, b) => {
//     return  a*b;
// }

// const printHello = () =>{
//     console.log("hello");
// }

// function countVowels(str){
//     let count = 0;

//     for(const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" || 
//             char === "u" 
//         ){
//             count++;
//         }
//     }
//     console.log(count);
// }



// const countVowels = (str) => {
//      for(const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" || 
//             char === "u" 
//         ){
//             count++;
//         }
//     }
//     console.log(count);
// }

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });



//also called Hight Order Function/Method
// let arr = ["pune", "delhi", "mumbai"];

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });


// let arr = [1,2,3,4,5];

// arr.forEach((num) => {
//     console.log(num*num);
// });


//map is used to store values in the array

// let nums = [67, 52, 39];

// let newArr = nums. map((val) => {
//     return val * 2;
// });

// console.log(newArr);

// let calcSquare = (num) => {
//     console.log(num * num);
// };

// let arr =[1,2,3,4,5,6,7];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenArr);




//Reduce method
// let arr = [1,2,6,4];

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// })



// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);


// //Practice questions

// let marks = [97, 64,32,49,99];

// let newArr = marks.filter((val) => {
//     return val > 90;
// });

// console.log(newArr);


let n = prompt("enter a number:");

let arr = [];

for(let i=1; i<=n; i++){
    arr[i-1] = i;
}

// console.log(arr);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log(factorial);