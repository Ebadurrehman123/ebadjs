 const BASE_URL= "https:open.er-api.com/v6/latest/USD";
const dropdowns=document.querySelectorAll(".dropdown select");

 for(let select of dropdowns){
    for(code in countryList){
        let newOption=document.createElement("option");
        newOption.innerHTML=currCode;
        newOption.value=currCode;
        select.append(newOption);
    }
    
 }