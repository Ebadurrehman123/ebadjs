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
    price:150,
}
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
function returnfirstvalue(array){
    return array[1]
}
console.log(returnfirstvalue(myarray));

 