import React from 'react';
import ReactDOM from 'react-dom';
//storeを作るために必要なcreateStoreをimport
import {createStore} from 'redux';
//Providerをimportしています、これはstoreがどこからでも (子コンポーネントからでも)アクセスできるように設定している
import {Provider} from 'react-redux';
//reducerをcreateStoreの引数にするためimport
import reducer from './reducers'
import './index.css';
//App.jsのディレクトリを移動したので変更
import App from './components/App';
import reportWebVitals from './reportWebVitals';


//createStoreでstoreを作成し、作成したReducerを登録している
const store = createStore(reducer)

ReactDOM.render(
  //Providorを使用してstoreのアクセスが どこからでも可能なように設定
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
