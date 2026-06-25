const coding=['python','java','ruby','js']
const value = coding.forEach((item ) =>{
    console.log(item)
    return item
})
console.log(value)
//ya ya pr return kuch bhi nai krr ra
//for each return nai krta



//filter operation kiya hota hai
//filter operation apna andr callback hi lata hai
/*const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num )=>num>4)
const newNums=myNums.filter(( nums)=>{
    return nums>4
})
console.log(newNums)

*/



/*const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=[]
myNums.forEach((nums)=>{
    if(nums>4){
        newNums.push(nums)
//array ma koi bhi value add krna ka liya push use kra gai
    }
})

console.log(newNums);
*/
const books=[
    {title:'book seven',genre:'History',publish:1986,
        edition:'1996'},
    {title:'book seven',genre:'science',publish:2003,
        edition:'1996'},
    {title:'book seven',genre:'History',publish:2004,
        edition:'1996'},
    {title:'book seven',genre:'geograpy',publish:2011,
        edition:'1996'},
    {title:'book seven',genre:'math',publish:1986,
        edition:'1996'},
    {title:'book seven',genre:'urdu',publish:1986,
        edition:'1996'},
    {title:'book seven',genre:'computer',publish:2000,
        edition:'1996'},

];
let userbooks=books.filter((bk)=>bk.genre==='History')

//userbooks=books.filter( (bk)=>{return bk.publish >= 2000})
userbooks=books.filter((bk )=>{
   return bk.publish >=2000 && bk.genre==='History'
})
console.log(userbooks);

let library=[{
    subject:"history",
    gene:1999
},
{

    subject:"pst",
    gene:2014
},
{
    subject:"computer",
    gene:2000

},
{
    subject:"english",
    gene:2002

}]

let library1=library.filter((bk1)=>{
   return bk1.gene===2000

})
console.log(library1)

const mynums=[1,2,3,4,5,6,7,8,9]
const newnums=[]
mynums.forEach((nums)=>{
    if(nums>4){
        newnums.push(nums)
    }
})
console.log(newnums)
