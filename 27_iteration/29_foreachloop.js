//for each loop array ma use hota hai
//
const codding=['js','ruby','phython','cpp']
codding.forEach(function (item) {
//ku ka ya call back hai is function ka name nai hota 
    //console.log(item)
} )

codding.forEach((value)=>{ 
    //console.log(value)
} )


//printme ik item lata hai apna pas jo bhi ap bolta hai u s ko print krta hai

function printMe(item){
    //console.log(item);
}
codding.forEach(printMe)


codding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
} )


const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },{
        languagename:"java",
        languagefilename:"java"
    },{
        languagename:"phython",
        languagefilename:"py"
    },
]

mycoding.forEach((item) => {
    console.log(item.languagename);
} )