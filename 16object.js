//singleton





//object literals
/*const mysym=Symbol("key1")

In JavaScript, an object literal is a way to create an object
 using curly braces {}.

Basic Syntax
const person = {
  name: "John",
  age: 25,
  isStudent: true
};

Here:

name, age, isStudent are properties
"John", 25, true are their values

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
*/










/*


const mysys=Symbol("mysymbol");

const user={
    name:"ebad ur rehman",
    [mysys]:"my symbol",
    semester:"fourth"
};

console.log(user[mysys]);
console.log(user.semester)
*/



const system=Symbol("myobjectkey1")

const user={
    name:"ebad ur rehman",
    [system]:"myobject2",
    semester:"fourth",
    cnicnumber:"4139292992",
    city:"hyderabad",
}
console.log(user[system])