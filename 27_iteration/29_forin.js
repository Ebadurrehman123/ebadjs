//In JavaScript, both for...in and for...of are used for looping, but they work differently.

//for...in
//Iterates over property keys (indexes or object keys)
//Mostly used for objects

//Key Difference
//Feature	for...in	for...of
//Iterates over	Keys / property names	Values
//Best for	Objects	Arrays & iterables
//Returns for array	Indexes	Elements
//Works on objects	✅ Yes	❌ No (unless iterable)

const myobject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}
for (const key in myobject) {
    //console.log(myobject[key]);   
   // console.log(`${key} shortcut is for ${myobject[key]}`)
}

const programming=['js','phython','java','cpp']
for (const key in programming) {
   // console.log(key)
   console.log(programming[key]);
}

 const map=new Map9()
map.set('In','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('In','India')
for (const key in map) {
   // console.log(key);
}

 