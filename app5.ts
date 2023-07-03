//filterメソッド
type Student ={
    name : string,
    year? : number,
    classes? : string
}
const students = [
    "木村 太郎",
    "木村 れい",
    "木村 蛍",
    "佐藤 太郎",
    "佐藤 愛子",
    "佐藤 退助",
]
const insertName = (student : string) => ({name:student});
const insertYear =(age : number) =>(student : Student) => ({
    ...student,
    year : age ===undefined ? undefined : age
})
const insertclasses =(classes : string) =>(student : Student) => ({
    ...student,
    classes
})
const stuInfo  : Student[]= students
    .map(insertName)
    .map(insertYear(15))
    .map(insertclasses("B"));
const kimuraFam : Student[] = stuInfo.filter((student : Student)=>
    student.name.includes("木村")
);

console.log(stuInfo);
console.log(kimuraFam);