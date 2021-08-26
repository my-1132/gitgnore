// actioncreatorをかくためのファイル
// 同じファイル内でもかけるが、同じ処理が他のファイルでも使う時にそれぞれ書かないといけない
// 関数を呼び出して使えるように

// export他のファイル(コンポーネント)でも使えるように
// const addaction (actioncreator名)
export const addaction =()=>{
    return{
        type:'タイプ名'
    
    }
}


//exportして他のファイルでも使えるように
export const COUNTPLUS = 'countPlus'
export const COUNTMINUS = 'countMinus'

//actioncreator
export const countPlus = () => ({
    type: COUNTPLUS
})
export const countMinus = () => ({
    type: COUNTMINUS
})