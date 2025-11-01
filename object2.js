//const tinderUser=new Object()
tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
 
//console.log(tinderUser)
const regularUser={
    email:"somegmail.com",
    fullname:{
        userfullname:{
            firstname:"ebad",
            lastname:"rehman"
        }

    }
}
//console.log(regularUser.fullname.userfullname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"c",6:"d"}



//const obj3={obj1,obj2}
 //const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
//console.log(obj3); 
const user=[
    {
        id:1,
        email:"urrehmanebad01",


    }
]

//user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));
ContentVisibilityAutoStateChangeEvent.log(tinderUser)

