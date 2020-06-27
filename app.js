function typeNumber(number){
    var res=document.getElementById('result');
    res.value+=number;
}
function removeInputField(){
    
    var res=document.getElementById('result');
    res.value="";
}
function calcResult(){
    var res=document.getElementById('result');
    res.value=eval(res.value);
}
function crossResult(){
    var res=document.getElementById('result');
   
    var len=res.value.length-1;
    res.value=res.value.substring(0,len);
}
function trig(name){
    if(name==="sin"){
        var res=document.getElementById('result');
   res.value=Math.sin();


    }else if(name==="cos"){
        var res=document.getElementById('result');
   res.value=Math.cos();


    }
    else if(name==="tan"){
        var res=document.getElementById('result');
   res.value=Math.tan();


    }else if(name==="sq"){
        var res=document.getElementById('result');
   res.value=res.value*res.value;


    }

}