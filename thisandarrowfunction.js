const user={
    username:"ebadurrehman",
    price:399,

  
    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);s
    }
}
/*user.welcomemessage()
user.username="sam"
user.welcomemessage()

console.log(this)

function chai(){
    let username="ebad"
    console.log(this.username)
}

chai()
*/
//const addtwo=(num1,num2)=>{
  //  return num1+num2

//}
//console.log(addtwo(3,4 ))

//const addtwo=(num1,num2)=> (num1+num2)
const addtwo=(num1,num2)=>({username:"ebadurrehman"})

console.log(addtwo(3,4))


