//Context

//executionContext
const person = {
  name: "Lee",
  age: 33,
  getAge() {
    return this.age;
  },
};

person.age;
//実行する時、personオブジェクトが呼ばれるので、thisがpersonをさす
console.log(person.getAge());

const age = person.getAge;
//実行する時、age変数が呼ばれるので、thisがwindowをさす
//console.log(age());

//personオブジェクトを呼ぶようにcallメソッドを使う
console.log(age.call(person));

class Person {
  name : string;
  age : number;
  constructor(name : string, age : number){
    this.name = name;
    this.age = age;
    this.getAge = this.getAge.bind(this);
  }

  getName=()=>this.name;
  getAge(){
    return this.age;
  }
}
  const p1 = new Person("lee", 33);
  console.log(p1.getAge());

  const myAge = p1.getAge;
  console.log(myAge()); //constructorでbindしているので実行可能
  console.log(myAge.call(p1));

  const myName = p1.getName;
  console.log(myName()); //constructorでbindしているので実行可能
  
