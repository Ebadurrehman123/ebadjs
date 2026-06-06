//for loop
for (let index=0;index<10;index++){
    const element=index
    if(element==5){
        console.log("number is 5")
    }
    console.log(element);
}
for(let numb=0;numb<10;numb++){
    console.log(`outer loop value:${numb}`)
    for(let j=0;j>10;j++){
        console.log(`inner loop ${j} and outer loop ${index}`)
    }
}