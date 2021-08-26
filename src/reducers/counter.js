//action.jsで記載したtypeの判定を行い処理の分岐を行う為、actionsで定義した値をimportする必要がある
import { COUNTPLUS,COUNTMINUS } from "../actions";
//initialStateは初期値を代入する為のもの
const initiaState = {val:0}
//1つのファイルに1個だけ使うことができる
//export defaultの後に無名関数を利用しているだけ
export default(state = initiaState,action) => {
    switch(action.type){
        case COUNTPLUS:
            return {val: state.val +1}
        case COUNTMINUS:
            return {val: state.val -1}
        default:
            return state
    }
}