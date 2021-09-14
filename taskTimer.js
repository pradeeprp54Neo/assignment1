var interval=null;
var stop=document.getElementById("stop");
class clock {
    render() {
     
    var d = new Date();
    var hour= d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();
    var time=document.getElementById("time");

    
    if(hour==12){
        time.textContent= `${hour} : ${min} : ${sec} PM`;
    }
  
    if(hour>12){
        hour=hour-12;
        time.textContent= `${hour} : ${min} : ${sec} PM`;
    }
    
    else{
        time.textContent= `${hour} : ${min} : ${sec} AM`;
    }
}
    start = ()=>{
        
        this.timer=setInterval(this.render,1000);
        
    }

    stop(){
        clearInterval(this.timer)
    }
}
var obj=new clock;
