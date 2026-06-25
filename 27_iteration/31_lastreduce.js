const myNumber=[1,2,3,4]
//const initialvalue=0
const myTotal=myNumber.reduce(function(accumulator,currentvalue){
    console.log(`acc:${accumulator} and currval:${currentvalue}`);
    return accumulator+currentvalue
}, 0)
//jo bhi ap initial value datay hai vo accumulator ma jati hai

//console.log(myTotal);
const myNumber1=[1,2,3,4,5]
const myTotal1=myNumber1.reduce( (acc,curr )=>acc+curr,0)
console.log(myTotal1);


const myshoppingcart=[
    {
        courseName:"js",
        price:2999
    },
    {
        courseName:"datasciencecourse",
        price:12999
    },
    {
        courseName:"javadevoloper",
        price:4999
    },
]
const pricetoPay=myshoppingcart.reduce( (acc,item )=>acc+item.
price,0)
console.log(pricetoPay)

/*
const mynum=[1,2,3,4,5,6]
const mytotal=mynum.reduce(function(accumulator,currentvalue){
    console.log(`accu ${accumulator} and  current value${currentvalue}`)
    return accumulator+currentvalue
},0) 
*/

const myshoppingcart1=[{
    courseName1:"DataScience",
    price:1223

},
{
    courseName1:"Web Devolpment",
    name:"sir Hitesh"

},
{
    courseName1:"DataAnalyst",
    price:12999

}]
const pricetoPay1=myshoppingcart1.reduce((acc,item)=>acc+item.price,0)
console.log(pricetoPay1) 
