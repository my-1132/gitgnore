//reducersに入っている他のファイルをまとめるための "index.js"

import { combineReducers } from "redux"; //結合するためのもの
import counter from './counter'; //結合されるもの

export default combineReducers({counter}) //複数ある場合は[,]で区切る