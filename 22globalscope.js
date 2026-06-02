/* CURLY BRACES
A code block or block statement is a group of statements enclosed within curly braces { }.

Code blocks are important for controlling the flow of execution and defining variable
 scope within a JavaScript program.
 Code Blocks and Statements
Code blocks allows for multiple statements to be treated as a single unit.

The body of a JavaScript function is always enclosed within a code 


Code blocks are essential for if statements:



Variables declared with let and const inside a code block are "block-scoped," meaning they are only accessible within that specific block.
This helps prevent unintended variable overwrites and promotes better code organization:

nested scope*/
function one(){
    const user1= "ebad"

    function two1(){
        const website1="youtube"
        console.log(user1);
        //console.log(website1)
    } 
    //console.log(website1);
     two1()
}
one()


//+++++++++++++++++++++++interesting++++++
/*function addone(num){
    return num + 1
}
console.log(addone(5))


const add=function(num){
    return num + 2
}
console.log(add(5))
*/ 