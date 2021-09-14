class A{
    abc(){
        return "Rp";
    }
}

class B extends A{
    bca(){
        let fname="Bobji";
        let pname=super.abc();//Rp
        console.log(`${fname} and ${pname} are good friends`)
    }
}


const obj=new B;
obj.bca();