//about instance

type Item={
    name : string,
    price : number,
    id ? : number
}
interface Cart{
    cart : {},
    currentId : number
}

//traditional Methd - Javascript
//メソッド名を大文字から始めて"new"インスタンスを使えるように意味を与える。
//"new"を使わない場合、'this'がグローバル、windowにつなぐ問題がある、
function CartV1(){
    this.cart  = [];
    this.currentId= 0;
}

CartV1.prototype.getNewId = function(){
    this.currentId++;
    return this.currentId;
};

CartV1.createItem = function(name : string,price : number){
    return{
        name,
        price
    };
};

CartV1.prototype.addItem = function(item : Item){
    this.cart.push({
        ...item,
        id: this.getNewId(),
    });
};

CartV1.prototype.clearCart = function(item : Item){
    this.cart = [];
    this.currentId = 0;
}
//newを使って空いてるインスタンスを生成
const cartV1  = new CartV1();
cartV1.addItem(CartV1.createItem("スイカ",1900));
cartV1.addItem(CartV1.createItem("リンゴ",200));
cartV1.addItem(CartV1.createItem("バナナ",100));

//Clsssを使って方法
class CartV2{
    cart : Item[];
    currentId : number;
    constructor(){
        this.cart = [];
        this.currentId = 0;
    }
    getNewId =()=>{
        this.currentId++;
        return this.currentId;
    };
    
    createItem = (name : string, price : number) =>{
        return {
            name,
            price
        }
    }
    
    addItem = (item : Item)=>{
            this.cart.push({
            ...item,
            id: this.getNewId(),
        })
        };
    
    clearCart = (item : Item) => {
        this.cart = [];
        this.currentId = 0;
    }
}
//予約語"NEW"でインスタンス生成
const cartV2 = new CartV2();
cartV2.addItem(cartV2.createItem("スイカ",1900));
cartV2.addItem(cartV2.createItem("リンゴ",200));
cartV2.addItem(cartV2.createItem("バナナ",100));
console.log(cartV1);
console.log(cartV2);