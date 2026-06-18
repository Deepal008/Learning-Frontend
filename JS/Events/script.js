// let btn1 = document.querySelector("#btn1");

// // btn1.onclick = (evt) => {
// //     console.log(evt);
// //     console.log(evt.type);
// //     console.log(evt.target);
// //     console.log(evt.clientX, evt.clientY);
// //     // console.log("btn1 was clicked");
// //     // let a = 25;
// //     // a++;
// //     // console.log(a); //26
// // };


// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked-headler1");
    
// });


// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked-handler2");
// });


// const handler3 = () => {
//     console.log("button1 was clicked-handler3");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked-handler4");
// });

// //For removeing elements the reference should be same
// btn1.removeEventListener("click", handler3);

// let div = document.querySelector("div");

// div.onmouseover =() => {
//     console.log("you are inside div");
// }; 



//Practice question
// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");


// let currMode = "light";
// modeBtn.addEventListener("click", () => {
//     if(currMode === "light"){

//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");

//         // document.querySelector("body").style.backgroundColor = "black";
//         // modeBtn.style.backgroundColor = "black";
//         // modeBtn.style.color = "white";
//     }else{

//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");

//         // document.querySelector("body").style.backgroundColor = "white";
//         // modeBtn.style.color = "black"
//         // modeBtn.style.backgroundColor = "white";
//     }

//     console.log(currMode);
// })


//Practice : Doing something using onmouseclick


let Btn = document.querySelector("#mode");
let body = document.querySelector("body");

let currMode = "light";
Btn.addEventListener("mouseover",  (event) => {
    if(currMode === "light"){
        currMode = "dark";
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }else{
        currMode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
    console.log(currMode);
})