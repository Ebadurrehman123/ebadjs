//generate a random color
const randomcolor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]

    }
    return color;
};

const startChangingcolor=function(){

    let intervalId=setInterval(changebgcolor,1000);
    
    function changebgcolor(){
        document.body.style.backgroundColor=randomcolor();

    }



    
};
const stopchangingcolor=function(){}

document.querySelector('#start').addEventListener
('click',startChangingcolor)

document.querySelector('#stop').addEventListener
('click',startChangingcolor)