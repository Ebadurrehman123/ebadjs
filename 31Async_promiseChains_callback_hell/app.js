//Asynchronus programming
//setTimeout()
//ya ik function ko execute krta hai
//
function hello(){
    console.log("hello")
}
setTimeout(hello,2000)//set timeout;
//callbacks
//The setTimeout() method calls a function after a number of milliseconds.
//ik fuction ka andr dura function 
// pass krta hai us ko callback katey hai
//asa function jo dusra function ka andr 
//as an argument pass hota ho

/*
The setTimeout() is executed only once.

If you need repeated executions, use setInterval() instead.

Use the clearTimeout() method to prevent the function from starting.

To clear a timeout, use the id returned from setTimeout():

myTimeout = setTimeout(function, milliseconds);
Then you can to stop the execution by calling clearTimeout():

*/

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(1,2,sum);
