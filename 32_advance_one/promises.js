//fetch('http://google.com').then().catch().finally
//promise hotabkiya hai apna ap ma object hai
//new keyword sa hama ik naya instence mil jata hai
//promise apna andr ik callback hell laata hai
//promise ma ap datay ho ik function is function ma do part hota hai
//ik hota hai resolve or dusra hota hai reject
//

const promiseOne=new Promise(function(resolve,reject){
    //do an asyn task
    //DB calls, network call
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },3000) 
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