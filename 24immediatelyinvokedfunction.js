//Immediate invoke function expressions(IIFE)
//iska matlab jasey hi apnay function lika is ko forun execute kr wao
//named iife

(function chai(){
    console.log('DB connected');
})();

/* important
()()
first parentesis jis ma hum function ki defination likay ga
second wala execution call jasa hum function ko call krna ma 
lagatay hai
 agr koi iifi puchay to ya nai bolna "jo function imidtate execute hojae"
 bulkay interview ma ya bolna hai
 "global scope kay pollution sa problem oti hai kai bar
 to uus global scope ka variable ya jomdecleration hai us 
 kohataney kay liya iifi ka use kiya hai "

//iifi
//(()=>{})()
*/
(function chai(){
    console.log("database connected")
})();

(()=>{
    console.log("db conected")
} )();
//error ara ta upper jab semicolon ni lagaya tha
((name)=>{
    console.log(`DB connected ${name}`)
}) ("ebad")




//sirf ya nai bol na jo function immediately execute hojae
//ya bhi bpl na hai global scope ka pollution sa problem hoti hai kai bar us ko
//hata na kay liya hum na iifi ka use kiya hai

//( function aurcode(){
/*(( ) => {  
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
*/



