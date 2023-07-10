class Stu{
    name : string;
    year : number;
    cls : string;
    constructor(name:string, year : number, cls:string){
        this.name = name;
        this.year = year;
        this.cls = cls;
        //this.getCls= this.getCls.bind(this);
    }
    //non-lexicalEnvirroment
    getName(){
        return this.name;
    }
    //lexicalEnvirroment
    getYaer=()=>{return this.year;}

    getCls(){
        return this.cls;
    }
}

const stu = new Stu("lee",2 , "A");
console.log(stu.getName());
const fnGetNmae = stu.getName;
console.log(fnGetNmae.call(stu));  
//Excution Context -> 

const fnGetYear=stu.getYaer;
console.log(fnGetYear());

const fnGetCls=stu.getCls;
console.log(fnGetCls());