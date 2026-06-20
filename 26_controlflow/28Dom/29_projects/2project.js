const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseFloat(document.querySelector('#weight').value);
    const result=document.querySelector("#result");
    if(height===''||height<0||isNaN(height)){
        result.innerHTML=`pls give a valid height ${height}`;
    }else if(weight===''||height<0||isNaN(weight)){
        result.innerHTML=`pls give a valid weight ${weight}`;
    
    }else {
      const bmi=  (weight / ((height * height)/10000)).toFixed(2)
      //shoow the results
      result.innerHTML=`<span>${bmi}</span>`;
    }
    
}); 