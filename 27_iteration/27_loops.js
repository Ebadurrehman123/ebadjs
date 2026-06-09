//for loop
for (let index=0;index<10;index++){
    const element=index
    if(element==5){
        console.log("number is 5")
    }
    console.log(element);
}
for(let numb=0;numb<=10;numb++){
    console.log(`outer loop value:${numb}`)
    for(let j=0;j<=10;j++){
        //console.log(`inner loop ${j} and outer loop ${index}`)
        //console.log(numb + "*" +j +'='+numb*j);
    }
}

let myArray=["superman","batman","spiderman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//keywords
//break and continue

for (let index = 0; index <=20 ; index++) {
    if(index==5){
        console.log("detected 5");
    break
    }
    console.log(`value of i is ${index}`);
}

//continue
for(let index=0; index <=20; index++){
    if(index==5){
        console.log("detected 5");
    continue
    }
    console.log(`value of i is ${index} `);
}