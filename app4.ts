//Map

const movies : string[] = [
    "神隠し",
    "動く城",
    "天気の子",
    "着物名は"
];
type Movie = {
    title : string,
    author? : string;
}
//mapメソッド　：　moviesObjにTypeMovieのアレイを入れる。

//①mapメソッドのパラメターmovieにアレイmoviesの元素を前から入れる
//②メソッドの作業を行い、リターンする。残っている元素がなくなるまでループ。
const moviesObj : Movie[] = movies.map((movie : string) => {
    return{
        title : movie,
        author : undefined
    };
})
//伝統的なfor文を使って上のmapと同じオブジェクトを生成。
const moviesObjUsingFor : Movie[] = [];
for(let i=0 ;i<movies.length ; i++){
    const movie : Movie={
        title : movies[i],
        author : undefined
    }
    moviesObjUsingFor[i] = movie;
}
//メソッドチェイニング
const methodChaning : Movie[] = movies
.map((movie:string)=> ({
        title : movie,
}))
.map((movie : Movie) => ({
    ...movie, //カーリング
    author : "宮崎駿"
}))

//メソッドチェイニング2 -> mapのリターンメソッドを外で作成、再利用に用意
const insertTitle = (movie : string) => ({title : movie});
const insertAuthor = (name : string) => (movie : Movie) =>({
    ...movie,
    author : name
})
const methodChaning2 : Movie[]= movies
    .map(insertTitle)
    .map(insertAuthor("みやざきはやお"));

//出力
console.log(moviesObj);
console.log(moviesObjUsingFor);
console.log(methodChaning);
console.log(methodChaning2);