function Outer() {
    var count=0;

    function Inner() {
    
    count++;
    
    return count;
    }
    
    return Inner;
     }
     var counter=Outer();
    console.log(counter());//1
    console.log(counter());//2
    console.log(counter());//3