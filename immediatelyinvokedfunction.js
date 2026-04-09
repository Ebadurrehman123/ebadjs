//Immediate invoke function expressions(IIFE)
//iska matlab jasey hi apnay function lika is ko forun execute kr wao
//named iife
(function chai(){
    console.log('DB connected');
})();




//sirf ya nai bol na jo function immediately execute hojae
//ya bhi bpl na hai global scope ka pollution sa problem hoti hai kai bar us ko
//hata na kay liya hum na iifi ka use kiya hai

//( function aurcode(){
(( ) => {  
    console.log('DB CONNECTED TWO');

})();
//kai bar error ata iifi ma ya function invoke to hogya 
//lekin is ko pta nai hai ka context rok na kha hai
//asi situation ma js ma end krna parta hai ';'laga na parta hai
//iifi ko as a function hi dak na hai
//unnamed iife
( (name)=>{
    console.log(`DB3 CONNECTED ${name}`);

})('Ebad ur rehman')




