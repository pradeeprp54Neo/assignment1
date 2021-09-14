let salaries={
    "anuj":20000,
    "sunil":30000,
    "rahul":25000
}

let arr=[]
function tosalary(...salaries){
    
    for(let arg of salaries) {
        if((arg.anuj>arg.sunil) && (arg.anuj>arg.rahul)){
            console.log(arg.anuj)
        }

        else if((arg.sunil>arg.anuj) && (arg.sunil>arg.rahul)){
            console.log(arg.sunil)
        }
        else{
            console.log(arg.anuj)
        }

}
}

tosalary(salaries)




// let salary={
//     "paras":3000000,
//     "tushar":500000,
//     "rahul":400000
// }
// function top(salary){
//     var max=0;
//     var topper="null";
//     for (let name in salary) {
//         if (salary[name]>max){
//             max=salary[name];
//             topper=name;
//         }

//     }
//     console.log(`${topper}`);
// }
// top(salary);
