let mydate=new Date()
/*console.log(mydate.toString());
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(typeof mydate)
*/
let mycreateddate=new Date(2023,0,23)
console.log(mycreateddate.toDateString())
let myday=new Date("2025-11-23")
console.log(myday.toLocaleDateString())
let myTimestamp=Date.now()
console.log(mycreateddate.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate)