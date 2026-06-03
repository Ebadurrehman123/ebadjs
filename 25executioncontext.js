//important
/*javascript excution context
jo bhi file bnai hai us ko js run ksa krti hai execute ksa krti hai
js do phase ma run krthi hai
1global execution context
2function execution context

js code execute ksa hota hai
two phases run hota hai
first memory creation phase
second execution phase
dono ma difference kiya hota hai
memory creation pase ma sirf variables ya jo bhi ap na declare kiya
un kay liyee jagaa alocate hoti hai un ko execute nai kiya jata
jo bhi ap na likay hai mathematical function + - * wp execute phase ma hota hai
sirf memory allocation phase hota hai memory creation phase ma

jab code run hota hai to 
1 global execution sa run hota hai
or sab sa phele allocate kiya jata hai this ka andr

phase 2 memory creation phase
is ma saraay varibles ko ikata kiya jata hai or un 
sab ko bas raka jata hai apnay pas ma

"
let val1=32
let val2=55
function addnum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addnum(val1,val2)
let result2=addnum(10,3)
"
sab sa phaly 
val1->undefined
val2->undefined
addnum->defination
result1->undefined
result2->undefined
ya memory creation phase hogya hai ya hai first cycle

2 cycle 2 hota hai execution phase

phase andr sab sa phele
val1 <-10
val2 <-5
 addnumber apna alag execution context bnata hai  
 jitne bar functin execute hotay vitni baar ik new box create hota hai
 us ko bolta hai new execution context
 or is context ka andr kiya hota hai 
 variable ka alage sa enviroment ka poora sendbox bnaya jata hai
 or ik execution thread bhi ap kay liye bnaya jata hai
 jis sa ap ka jitna bhi execution hai wo sub kiya jata hai

 us box ka honay sa wapas say do kaam hoga 
 do konsay kam tay
 memory creation phase
 execution phase
 wo kiskay liye execute hogay function call addnumber kay liye

 ab jitni bar bhi ap kay pass function ai ga wapas sa ap ko memory phase bhi krna hai
 or execution phase bhi krna
  
 


