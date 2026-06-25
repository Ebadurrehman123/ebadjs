/*let btn1=document.querySelector('#btn1')
btn1.onclick=()=>{
    console.log('BTN1 was clicked');
    let a=25;
    a++;
    console.log(a);
}
let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("your inside div");
};
*/
//event object
//it is a special object that has detail about the event
//all event handlers haveaccess to the event objects properties and method
//node.event=(e)=>{
// handle here 
//   }
//e.target , e.type,e.clientx,e.clienty
//let btn1=document.querySelector('#btn1')
//btn1.onclick=(evt)=>{
//    console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//};

//Event listener
//event listener ka through same event ma multiple kaam kr wa skta hai
let btn1=document.querySelector("#btn1")
btn1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked");
    console.log(evt);
});
btn1.addEventListener("click",()=>{
    console.log("button 1 was clicked - handled 2")
    console.log(evt);
    console.log(evt.type);
})
let div=document.querySelector("div");
btn1.removeEventListener("click",()=>{
     
})
let color=document.querySelector("#color")
let currmode="light";

color.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currmode="light"
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode)
})

let over=document.querySelector("#over")
let mode="light";
over.addEventListener("mouseout",()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black"
    }else{
        mode="light"
        document.querySelector("body").style.backgroundColor="white"
    }
    console.log(mode)

})
