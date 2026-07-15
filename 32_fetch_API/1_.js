//fetch API
//the fetch API provides an interface for fetching(sending/receiving)
//resources
//it uses request and response objects
//the fetch() method is used to fetch resouces(data)

//let promise=fetch(url.[options])

const URL= "https://dummyjson.com/quotes/random";
const factpara=document.querySelector("#fact")
const btn=document.querySelector("#btn")

//let promise=fetch(URL);
//console.log(promise)


const getfacts=async()=>{
    console.log("geeting data ...");
    let response=await fetch(URL);
    console.log(response);//json format
    //js jasa format hota hai
    let data= await response.json();
    console.log(data.quote)
    factpara.innerText=data.quote;
};
btn.addEventListener("click",getfacts)

//AJAX is Asynchronus js and XML
//JSON is javascript Object Notation
//json()methods return a second promise that resolve with result of parsing 
//the response body text s json .(input is json ,output is json object)


//fetch api kiya krthi hai hamre liya kuch data laker ati hai
//ab ya data readable format ma nai hai us ko readable krna ka
//liye .json method ko call lga tay hai wo is ko readable bna ta hai js
//ko hm use kr skta hai
//use krna ka matlan hai hum use apna htm ma use krskta hai
//yani innertext ya innerhtml ka and dika skta hai


//promise chaining
function getfacts(){
    fetch(URL)
    .then((responses)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factpara.innerText=data.quote;
    })
}