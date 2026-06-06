const { use } = require("react");

//objectkoestructuringkrna
const course={
    coursename:"js in urdu",
    price:"222",
    courseInstructor:"hitesh"
}
//course.courseInstructore
//const {courseInstructor}=course
const {courseInstructor:instructor}=course
console.log(instructor);

/*
const navbar=({company})=>{

}
navbar(company='ebad')

What does ({ company }) mean?

This is object destructuring in function parameters.

The function expects an object, like:

{
  company: "ebad"
}
Correct way to call it
const navbar = ({ company }) => {
    console.log(company);
}

navbar({ company: "ebad" });

Output:

ebad
Why is your call wrong?
navbar(company = 'ebad')

This assigns "ebad" to a variable named company and 
passes the string "ebad" to the function.

So the function receives:

"ebad"

But it is expecting an object:

{ company: "ebad" }

That's why destructuring won't work correctly.

Equivalent code without destructuring
const navbar = (obj) => {
    console.log(obj.company);
}

navbar({ company: "ebad" });

This and the destructured version do the same thing.

Interview Tip
const navbar = ({ company }) => {
    console.log(company);
}

is shorthand for:

const navbar = (obj) => {
    const company = obj.company;
    console.log(company);
}
*/

// Jason++++++++++++++++++++++++++++++++++++++++++++++++

/*{
    "name":"ebad",
    "coursename":"javascript",
    "teacher","sir",
}
*/
//practice
const object1={
    name:"ebadurrehman",
    semester:"4",
    university:"szabist",
    campus:"Hyderabad"
}

console.log(object1);
const ebad=object1
console.log(ebad);

const navbar2=({company})=>{
    console.log(company)
}
navbar2({company:"ebad3"})





const student={
    name4:"ebad",
    age:18,
    city:"Hyderbad"
}
student.email="urrehman@gmail.com"
student.age=19
console.log(student)
console.log(student.name4,student.age)

const user4={
    fullname4:{
        firstname:"ebad",
        lastname:"urrehman"
    }
}
console.log(user4.fullname4.lastname)







const users=[
    {
        id:1,
        email:"a@gmail"
    },
    {
        id:2,
        email:"b@gmail"
    }
]
console.log(users[0].email)


const objects1={name:"ebad",lastname:"urrehman"}
const objects2={name:"saad",lastname:"ullah"}

const object3=(objects1,objects2){
    
}
