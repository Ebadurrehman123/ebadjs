function username(name="ebad"){
    if(name==="ebad"){
        console.log("pls enter a name");
        
    }
    else{
        console.log("pls enter a corect name")
        return
    }
    return `${name}  just login`
}
console.log(username("saad"))


// fuctions with objects and array

// rest operator or spread operator(...)

function calculate(value1,value2,...num1){
    return num1
}
console.log(calculate(200,333,221,4000))


//anyobject

const user={
    name:"ebad",
    price:150,}
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);

}

handleobject(user)
// function bna ka direct object call krskta hai
handleobject({
    name:"sam",
    price:400

})
//array 

const myarray=[200,300,555,900]
function returnfirstvalue(getarray){
    return getarray[1]
}
console.log(returnfirstvalue(myarray));

 function calculatecartprice(num1){
    return num1
 }
 console.log(calculatecartprice(2))


 ////////////////////////////===========
 // (...)->REST OR SPREAD OPERATOR
 //REST
 function cart(...num1){
    return num1
 }
 console.log(cart(200,300,200,400))

 function cart1(val1,val2,...num4){
    return num4
 }
 console.log(cart1(200,300,400,500,600,700))



  
