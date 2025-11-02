function saymyname(){
    console.log("ebadurrehman")

}
//saymyname()


function loginusermessage(username="sam"){
    if (username===undefined){
        console.log("enter username")
        return

    }
    return `${username} just login`

}
//console.log(loginusermessage())
console.log(loginusermessage("ebad"))
  