//Asynchronus programming
//setTimeout()
//ya ik function ko execute krta hai
//
function hello(){
    console.log("hello")
}
setTimeout(hello,2000)//set timeout;
//callbacks
//ik fuction ka andr dura function 
// pass krta hai us ko callback katey hai
//asa function jo dusra function ka andr 
//as an argument pass hota ho
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(1,2,sum);
