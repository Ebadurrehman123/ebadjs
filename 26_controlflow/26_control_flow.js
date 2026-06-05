//if
const isuserloggedIN=true
if(3!=2){
    console.log("true")
    
}
const temperature=40
if(temperature<50){
    console.log("LESS THAN 50")
}else{
    console.log("greater than 50")
}
//is ma use kiya hai let ya const power variable ma ya hota hai block scope condidion 
// sa bahir variable acess nai hota
//let use kra ya cont use kra in ma scope ka problem nai hai
const score=200
if(score<40){
    let power="fly"
    console.log(`user power:${power}`);
}else{
    console.log("greater than 50");
}
//console.log(`user${power}`);
//is ma access nai h

//ab hum use kr ra hai var
//var ka scope hai completely global
const score1=200
if(score1>100){
    var power1="fly"
    console.log(`score is ${power1}`)
}
console.log(`user power:${power1}`);

/*
const balance=1000
if(balance<500){
    console.log("less than");
}else if(balance<750){
    console.log("balance less than 750");
}else if(balance<900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}
*/
const userloggedIN=true
const debitcard=true
const logedinfromgoogle=false
const logedinfromEmal=true

if (userloggedIN && debitcard && 2==3){
    console.log("allow to buy courses");
}
if(logedinfromgoogle || logedinfromEmal){
    console.log("user logged in");
}




