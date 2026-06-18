// let heading = document.getElementsByClassName("heading");
// console.dir(heading);

// let button = document.getElementById("myid");
// console.log(button);

// let parahs = document.getElementsByTagName("p");

// console.log(parahs);


// let firstElements = document.querySelector("p");
// console.dir(firstElements);


// let allElement = document.querySelectorAll("p");
// console.dir(allElement);

// console.dir(document.body.first);

// let div = document.querySelector("div");
// console.log(div);

// let heading = document.querySelector("h1");
// console.log(heading);



//Practice Questions
//Q1
// let heading = document.querySelector("h2");
// console.dir(heading);

//output
// heading.innerText = heading.innerText + "from apna college students"
// 'Hello JavaScriptfrom apna college students'

//Q2
// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs){
//     div.innerText = 'new unique value '+  idx;
//     idx++;
// }
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// console.log(divs);



//Attributes
// let div = document.querySelector("div");
// console.log(div);

// let idAtt = div.getAttribute("id");
// console.log(idAtt);


// let nameAtt = div.getAttribute("name");
// console.log(nameAtt);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));


//node.style
// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.color = "white";
// div.style.fontSize = "20px";
// div.innerText = "Hello";
// div.style.visibility = "hidden";



//Insert Element
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me"
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn); // adds at the end of node(inside)

// div.prepend(newBtn);   //adds at the start of node(inside)

// div.before(newBtn);  //adds before the node (Outside)

// div.after(newBtn); //adds after the node(outside)


// let newHeading = document.createElement("h1");
// newHeading.innerHtml = "Hi, I am new!";

// document.querySelector("body").prepend(newHeading);



//node.remove
// let para = document.querySelector("p");
// para.remove();



//Practice
// Q1
// let newBtn = document.createElement("button");
// newBtn.innerHTML = "Click me!";

// document.querySelector("body").prepend(newBtn);

// let button = document.querySelector("button");
// button.style.backgroundColor = "red";
// button.style.color = "white"


// // Q2
// let para = document.querySelector("p");
