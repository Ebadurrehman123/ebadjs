//for of
//for (const iteration of object) {
//}

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4]
for (const num of arr) {
    console.log(num);
}

const greetins="HelloWorld"
for (const greet of greetins) {
    console.log(`Each char is${greet}`)
}

//maps
//array jasay hotay hai 
//map ik object hai jo kay hold krta hai key value pair
//jasa humna daka tha hama object key value pair hai same usi tarra
//maps jo hai unique value kay liya janay jatay hai kr js order ma enter kiya hai us 
// order ma hi rati hai
const map=new Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('Fr','France')
//map.set('IN','India')

//console.log(map);

//for (const key of map) {
//    console.log(key);
//}

for (const [key,value] of map) {
    //console.log(key,':-',value)
}

const myobj={
    'game1':'NFS',
    'game2':'Spiderman'
}
//for (const [key,value] of myobj) {
    //console.log(key,':-',value);
//}

const map=new Map9()
map.set('In','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('In','India')
for (const key in map) {
    console.log(key);
}

 


