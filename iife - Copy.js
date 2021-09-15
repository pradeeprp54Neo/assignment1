var calc=function(){
//IIFE:immediately invoke function expression
return {
	add:function (a,b){
	return (a+b)
}
}
}();
console.log(calc.add(10,5))
