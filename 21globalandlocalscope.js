let a=333
const b=88 
//var c=300 
//{}jab ap ka pas curly braces ata hai to is ko kehta hai scope ya jab function ka sath ya pir if else
//  ka sat ata hai to isko khetay hai scope
//Global scope jo bhi bhir lika gai wo global scope hai wo value andr available hoti hai
//Block scope jo bhi andr lika gai. wo jo andr linkta hai wo bahir nai jaati
 if (true){
    let a=10
    const b=20
    var c=30
    console.log("inner:",a);
}
console.log(a);
//console.log(b);
//console.log(c);
/*function one(){
    const username="ebad"
    function two(){
        const website="youtube"
        console.log(username)

    }
    //console.log(website);
    two()
}

one()

if(true){
    const username="ebad"
    if(username=="ebad"){
         const website="youtube"
        console.log(username+website)

    }
    //cons ole.log(website)
 }
console.log(username);
//+++++++++++++++++++++++++++intersting+++++++++++++++++++


function addone(num){
    return num+1

}
addone(5)
const addtwo= function(num){
    return num+2
}

console.log(addone(5))

function one(){
    const username="ebadurrehman"
    function two(){
        const website="youtube"
        console.log(username);

    }
  //  console.log(website);
    two()
} 

//one()
if(true){
    const username="ebadurrehman"
    if (username==="ebad"){
        const website="youtube"
        console.log(username+website);
    }
  //   console.log(website);
} 
//console.log(username);

// +++++++++++++++++++++intresting++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}
addone(5)
//expressions 
console.log(addtwo(6))
const addtwo=function(num){
    return num+2
}

addtwo(5)