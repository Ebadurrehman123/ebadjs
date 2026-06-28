//let div=document.querySelector("div");
//sdiv.style.backgroundColor="pink"


let para=document.querySelector("p")
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","newClass"));


//how to insert element

let newbtn=document.createElement("button")
newbtn.innerText="clickme";


//how to visible button in screen
//documemt ka andr add krna hota hai
//add krna ka liya 4 main method hotay hai
//1st append last ma add

let div=document.querySelector("div");
//div.append(newbtn)
//div.prepend(newbtn)
//div.before(newbtn)
//div.after(newbtn)
para.after(newbtn)

let newheading=document.createElement("h1");
newheading.innerHTML="<i>Hi I am New</i>";
document.querySelector("body").prepend(newheading);


let newbutton=document.createElement("button");
newbutton.innerText="click me"
newbutton.style.backgroundColor="red";
document.querySelector("body").prepend(newbutton);


let newparagraph=document.getElementsByClassName(".mypara");

document.querySelector("body").prepend(newparagraph);