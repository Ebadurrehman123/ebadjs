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
user.welcomemessage()*/

console.log(this)

function chai(){
    let username="ebad"
    console.log(this.username)
}

chai()