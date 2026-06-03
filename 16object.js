//singleton





//object literals
const mysym=Symbol("key1")

const Jsuser={
    name:"ebadurrehman",
    "full name":"hitesh choudry",
//jab ap symbol ko refer kr ra ho to sqare bracket ma use krna parta hai
//or jab access krna ho to square bracket dana hota hai
    [mysym]:"mykey1",
    age:18,
    location:"pakistan",
    email:"urrehmanebad01@gmail.com",
    isLogedIn:false,
    lastlogindays:["MONDAT","TUESDAY"]

} 

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mysym]);
Jsuser.email="ebadgpt.com";
Object.freeze(Jsuser);
Jsuser.email="microsoft.com";

//console.log(Jsuser);
Jsuser.greeting=function(){
    console.log("hello js user");
}

Jsuser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(Jsuser. greeting());
console.log(Jsuser.greetingt)




