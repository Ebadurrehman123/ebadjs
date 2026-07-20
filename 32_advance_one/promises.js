//fetch('http://google.com').then().catch().finally
//promise hotabkiya hai apna ap ma object hai
//new keyword sa hama ik naya instence mil jata hai
//promise apna andr ik callback hell laata hai
//promise ma ap datay ho ik function is function ma do part hota hai
//ik hota hai resolve or dusra hota hai reject
//


/*

A Promise in JavaScript is an object that represents 
the eventual completion (success) or failure of an 
asynchronous operation.

Instead of waiting for a task (like fetching data from an API),
 JavaScript continues executing other code, and the Promise 
 notifies you when the task is complete.

Promise States

A Promise has 3 states:

Pending – Initial state, operation is in progress.
Fulfilled (Resolved) – Operation completed successfully.
Rejected – Operation failed.




Interview Definition

A Promise is a JavaScript object that represents the eventual result of an asynchronous
 operation. It can be in one of three states: Pending, Fulfilled, or Rejected, and is 
handled using .then(), .catch(), .finally(), or async/await.

*/

const promiseOne=new Promise(function(resolve,reject){
    //do an asyn task
    //DB calls, network call
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },2000) 
})
//resolve ka connection hai .then ka sath
//.then ma milta hai ik callback yani ik function
//ya function outomatically ik argument recieve krta hai
//js ka kaam hai jo settimeout ka baad kaam hwa hai jo value mili hai
//wo return hoti hai ya pr
//jab ap in dono ko connect krna chata hai
//ik method hai resolve jab ap resolve execute hoga to ya
//asl ma .then sa connect hwa hai
promiseOne.then(function(){
    console.log("promise consumed");

})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },4000)

}).then(function(){
    console.log("Async 2 resolved");
})


////////////////////////////////////////
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Ebadurrehman",email:"urrrehmsns@gmai;.com"})
    },6000)
})

promiseThree.then(function(user){
    console.log(user)
},5000)


//////////////////////////////////////////////////
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        //let error=true
        let error=false
        if(!error){
            resolve({username:"Ebad",email:"google@gmail.com"})
        }else
            reject('Error:Something went wrong')
        
    },3000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
//ab jo necchay waly .then ma jo value ari hai us ko khetay hai chaining
//yani jo upper waly .then sa return hoker ai gi wo hi 
// apkay new chain ma ai gi
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
}).finally(()=>console.log("the promise is either rejected or resolve"))


//////////////////////////////////////////////////////////////////////


//async thora wait krta hai kaam kai hona ka
//hojae to agai barta hai wrna wahi error da data hai


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        //let error=true
        let error=false
        if (!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject("ERROR:js went wrong")
        }
    },7000)
})

async function consumePromiseFive(){
    try{
    const response=await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

