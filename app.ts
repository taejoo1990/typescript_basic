//reduce メソッド

const numbers : number[] = [1,2,3,4,5,6,7,8,9,10];
const sum = numbers.reduce((a : number, b : number)=> a+b);

type sumObject ={
   [key : string] : string | number;
};

const sumObjects : sumObject[] =[
    {English : "abcedfg..." },
    {Korean : "가나다라마바사..."},
    {japanese : "あいうえお..."}
]

const universityLanguage : sumObject = sumObjects.reduce((a : sumObject, b:sumObject)=>({...a,...b}));
function sumNumbers(...arg : number[]) : number{
    return Array.from(arguments).reduce((a : number, b : number)=> a+b,0);
}
console.log(universityLanguage)
console.log(sum)
console.log("sum : " + sumNumbers(10,20,30,40,50));