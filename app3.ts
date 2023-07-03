//コインを入れることを待っている洗濯機
function* washer(){
    let ready : boolean = false;
    let coin : number= 0;
    const needsCoins : number = 3;
    console.log("Insert coin " + coin + " / " + needsCoins)
    while(!ready){
        yield "good";
        coin = coin+1;
        console.log("Insert coin " + coin + " / " + needsCoins);
        ready = coin===needsCoins ? true : false;
    }
    return "done";
}
const run = washer();
running(run);
//コインを入れて洗濯機を作動する
function running(run : Generator){
    setTimeout(() => {
        if(run.next().done){
            console.log("washer is running");
        }else{
            running(run);
        }
    }, 2000);
}
//洗濯機の作動と関係ならずラインは終わる。
console.log("line Finish");
