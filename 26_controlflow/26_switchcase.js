//switch case
/*switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
const month=3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
//Jab condition true ho jaye aur break execute ho, to loop wahin stop ho jata hai.
//Uske baad loop ka code execute nahi hota.   
        default:
        console.log("default case match")
        break;
}
const month1="january"

switch (month1) {
    case "feb":
        console.log("feb");
        break;
    case "january":
        console.log("january");
        break;
    case "march":
        console.log("march");
        break;
        default:("default case march")
        break;
}

const score2=100
switch (score2) {
    case 40:
        console.log("you did not play well")
        break;
    case 50:
        console.log("you  play well")
        break;
    case 100:
        console.log("you play excellent")
        break;

    default:
        break;
}

//trurthe and falsee value

//const userEmail="ebad01@gmail.com"
//const userEmail=""
const userEmail=[]

if(userEmail){
    console.log("got user email");
}else{
    console.log("Dont have user email");
}


//falsy values

//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
// "0",'false'," ",[],{},function(){}

if(userEmail.length===0){
    console.log("array is empty")
}
//object empty
const emptyobject = {}
if(Object.keys (emptyobject).length===0){
    console.log("object is empty")
}


/*
false==0
true
false= ''
true
0=''
true
////////////////////////////
&&  ka matlab sari condition true ani chae
|| or la matlab koi bhi ik condition true honi chaie
*/

//Nullish coalescing operator(??):null undefibed
let val1;
val1=5 ?? 10
console.log(val1)
val1=null ?? 10
console.log(val1);

var1=undefined ?? 16
console.log(var1);

value=null ?? 10 ?? 20
console.log(value) 

// Terniary Operator
//condition ? true:false

const iceteaprice=100
iceteaprice <=80 ? console.log("less than 80"):console.log
("greater than 80")
