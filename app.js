let id=document.getElementById('ibox');
let buttons=document.querySelectorAll('button');
let string ="";
let arr=Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
       if(e.target.innerHTML=='='){
        string = eval(string);
        ibox.value = string;
       }else if(e.target.innerHTML == 'AC'){
          string="";
          ibox.value=string;
       }else if(e.target.innerHTML == 'DEL'){
           string = string.substring(0,string.length-1);
           ibox.value=string;
       }else{
        string +=e.target.innerHTML;
       ibox.value = string;
       }
        
    })
})