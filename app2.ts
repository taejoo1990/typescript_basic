//JS,TSでのオブジェクトの生成方法。

type Box ={
    width : number,
    height : number,
    borderRadius : number,
    backgroundColor : string,
    borderWidth ? : number,
    ['className'] ? : string
};

//1　‐　普通の
const box1 : Box ={
    width : 200,
    height : 200,
    borderRadius : 5,
    backgroundColor : 'red'
};

//2 - パラメータとkeyが同じ場合、省略できる。
function makeBox(
    width : number,
    height : number,
    borderRadius : number,
    backgroundColor : string
) : Box{
    return{
        width,
        height,
        borderRadius,
        backgroundColor
    };
}
const box2 = makeBox(200,200,5,'red');

//3 Classを活用したインスタンスオブジェクト
class Shape implements Box{
    width : number;
    height : number;
    borderRadius : number;
    backgroundColor : string;
    constructor(
        width : number,
        height : number,
        borderRadius : number,
        backgroundColor : string
    ) {
  
            this.width=width;
            this.height=height;
            this.borderRadius=borderRadius;
            this.backgroundColor=backgroundColor;
       }
}
const box3 = new Shape(200,200,5,'red');
if(box3 instanceof Shape){

}
box1.borderWidth = 3;
box1['className'] = "box rounded";
delete box1.borderWidth;

//コピーできない,box4のvalueを変更するとbox1のデータも変更する。
const box4 = box1; 
//オブジェクトのコピー
const copyBox1 = Object.assign({},box1);
const copyBox2 = {...box1};
const copyBox3 = JSON.parse(JSON.stringify(box1));
