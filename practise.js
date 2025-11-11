//name="ebadurrehman"
//age=22
//console.log(`my name is ${name} and my age is ${age}`)
/*function addtwonumber(number1,number2){
    let result=number1+number2
    //return result
   // return number1+number2
    console.log(result)


}
addtwonumber(3,43)

function userlogin(user){
   // console.log(user)
   if(user=="ebad"){
    console.log("welcome ebad")

   }


}
userlogin("ebad")
const mysym=Symbol("key1");
const jsuser={
    name:"ebadurrehman",
    age:18,
    location:"pakistan",
    email:"urrehmanebad",
    [mysym]: "mysecret value"
};

console.log(jsuser)*/

function loginusername(username="ebadurrehman"){


    if (username==undefined){
        console.log("pls enter a name")
    }
    return `${username} just login`

}
console.log(loginusername())