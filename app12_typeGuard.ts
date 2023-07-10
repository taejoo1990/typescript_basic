// typeGuard

function doubleTypeFunction(a : number | string){
    //type Guard code
    if(typeof a === 'string'){
        return a.replace("x","X");
    }
    //パラメターaのタイプがナンバーになる場合もあるので、TsCompilerからエラーを発生。
     //return a.replace("y","Y");
}

doubleTypeFunction("x");
//ライン8でRuntimeError発生
doubleTypeFunction(12);

function foo(a? : number | null){
    //type guardCode
    if(a===null)return;

    console.log('display before');
    console.log(a?.valueOf);
    console.log('display after');
}

foo();

interface Foo{
    foo : string;
    common : string;
}
//undefinedのtype guard code
function isFoo(arg:any) : arg is Foo{
    return arg.foo !== undefined;
}
console.log(isFoo({foo : 'ok', common : 'wow'}));