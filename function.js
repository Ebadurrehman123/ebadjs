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
//console.log(loginusermessage("ebad"))


function calculatecartprice(val1,val2,...num1){
    return num1

}
const user={
    username:"ebadurrehman",
    price:444
}
function handobject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}


//console.log(calculatecartprice(200,33,434))
//handobject(user)
handobject({
    username:"ebad",
    price:333
})
const mynewarray=[200,333,44,555]
function returnsecondvalue(getarray){
     return getarray[2]

}
//console.log(returnsecondvalue(mynewarray));]
//console.log(returnsecondvalue([22,33,44,55,66,77]))
