//const tinderUser=new Object()
//1. Creating object dynamically
//You first create an empty object:
//Then you add properties later one by one.
tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
 
//console.log(tinderUser)
const regularUser={
    email:"somegmail.com",
    fullname:{
        userfullname:{
            firstname:" ebad",
            lastname:"rehman"
        }

    }
}
//console.log(regularUser.fullname.userfullname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"c",6:"d"}

//Rule to remember:

//{ obj1, obj2 } → object inside object
//{ ...obj1, ...obj2, ...obj4 } → merge objects
//Object.assign({}, obj1, obj2, obj4) → merge objects

//For interviews and modern JavaScript, 
//the spread operator (...) is the most 
// commonly used approach.
//Merging objects means combining the properties 
// of two or more objects into a single object.
//For beginners, just remember:
//Merging objects = taking properties from 
//multiple objects and putting them into one new object.
/*
const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2,obj4)
//Merge all objects using Spread Operator (recommended)
const obj3={...obj1,...obj2}
console.log(obj3); 

user[1].email
console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.entries(tinderUser));



const user=[
    {
        id:1,
        email:"google.com"
    },
    {

    }

]
*/
//user[1].email
//console.log(tinderUser);
//console.log(Object.keys(tinderUser))
//console.log(Object.entries(tinderUser))

//Rule to remember
//[] = Array
//{} = Object
//user[0] → first object in array
//user[0].email → property of first object

//This pattern (array of objects) is extremely 
//common in APIs and interviews.



//Excellent! This is called object destructuring.

const course={
    coursename:"javascript",
    price:"999",
    courseinstrutor:"sir hitesh"

}
//course.courseinstrutor
const{courseinstrutor:instructor}=course
console.log(instructor)


//Why use destructuring?

//Without destructuring:

//console.log(course.coursename);
//console.log(course.price);
//console.log(course.courseinstrutor);

//With destructuring:

//const { coursename, price, courseinstrutor } = course;

//console.log(coursename);
//console.log(price);
//console.log(courseinstrutor);

//Less typing and very common in React, APIs, and interviews.

//Interview Rule
//const { propertyName: newVariableName } = object;

//Example:

//const { courseinstrutor: instructor } = course;

//means:

//const instructor = course.courseinstrutor;
//Both give the same result.

//practice

//const emptyobject = {}
//emptyobject.id1="2480137",
//emptyobject.name1="ebad  ur rehman",
//emptyobject.course1="databse administrator"
//emptyobject.isLoggedIn1=false

//console.log(emptyobject)

const object1={name:"ebad",age:"18"}
const object2={name:"saad",age:"28"}
const object3={name:"wali",age:"23"}

const course2={
    courseinstrutor2:"sir chai wala",
    coursename2:"javascript",
    nameofstudent2:"ebadurrehman",
    semester:"fouth"
}
const{courseinstrutor2:instructor2,coursename2:name2,}=course2
console.log(instructor2,name2)

