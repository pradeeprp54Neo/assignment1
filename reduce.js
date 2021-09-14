let arr1=[1,2,3,4]
const total=arr1.reduce((prev,current)=>{
    console.log(prev+"--"+current)
    return prev+current
},0)
console.log(total)