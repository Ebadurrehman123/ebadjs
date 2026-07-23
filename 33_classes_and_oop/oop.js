//object literal
const user={
    username:'EBAD ur rehman',
    email:"urrehmanbs@gmail.com",
    SignedIn:true,

    getuserDetails:function(){
        console.log("get user details")
    }

}

console.log(user.email)
console.log(user.getuserDetails())
