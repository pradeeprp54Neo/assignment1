function Employee(name)
 {

this.name=name;
 }
Employee.prototype.details=function(){

console.log("My name is "+this.name);
 }
var emp=new Employee("Rp");
emp. details();