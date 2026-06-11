/*const coding=['python','java','ruby','js']
const value = coding.forEach((item ) =>{
    console.log(item)
    return item
})
console.log(value)
//ya ya pr return kuch bhi nai krr ra
//for each return nai krta
*/


//filter operation kiya hota hai
//filter operation apna andr callback hi lata hai
/*const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num )=>num>4)
const newNums=myNums.filter(( nums)=>{
    return nums>4
})
console.log(newNums)

*/
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=[]
myNums.forEach((nums)=>{
    if(nums>4){
        newNums.push(nums)
//array ma koi bhi value add krna ka liya push use kra gai
    }
})

console.log(newNums);