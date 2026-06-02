/*In JavaScript, the this keyword refers to an object.

The this keyword refers to different objects depending on how it is used:

Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an object method, this refers to the object.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
Note
this is not a variable.

this is a keyword.

You cannot change the value of this.

this in a Method
When used in an object method, this refers to the object.

In the example on top of this page, this refers to the person object.

Because the fullName method is a method of the person object.
THIS current context ko refer krta hai
*/
const user={
    username:"ebad",
    price:444,
    welcomemessage:function(){
        console.log(`${this.username} welcome to website`)
        console.log(this );
    }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()
//console.log(this)

// function
/*function chai(){
    let username="ebad"
    console.log(this.username);
}   
chai()   
//object ka andr kaam kr ra hai lekin function kay
//andr nai

//ARROW FUNCTION
const chai=()=>{
    let username="ebad"
    console.log(this);
}
//chai()

//pure arrow function
//basic arrow function
//const addtwo=(num1,num2)=>{
  //  return num1 + num2
//}

//console.log(addtwo(3,5))

//implicit return ma parenthesis use nai krta
// agr curly braces use kiya to return likna parray ga
//const addtwo=(num1,num2)=>num1+num2
//console.log(addtwo(3,4))
//agr 
 
//agr object ko return kr na hota to paranthesis ka baad braket lgana hota

const add=(num1,num2) => ({username:"ebad"})


console.log(add())
 
*/