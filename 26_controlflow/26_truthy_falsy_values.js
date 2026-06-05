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
//Important
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
