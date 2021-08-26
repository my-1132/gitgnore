
import React ,{Component ,useState}from 'react';
import { connect } from 'react-redux';

import { countPlus,countMinus } from '../actions';

//継承してclass App をコンポーネント化
// class App extends Component {

//条件分岐（メソッド）
//メソッドの場合classの中に書いてrenderの中で呼び出し
// renderWithCondition(isMorning){
//   if(isMorning){
//     return <span>GoodMorning</span>
//   }else{
//     return <span>Hello</span>
//   }
// }

// render(){
//JSX構文の決まり
//JSXは1つのタブのみ返却する形にしなければならない
//<React.Fragment>タグを使用することで、画面にタグを反映させずに済む
// return (
//   <React.Fragment>
//     <div>hello</div>
//     <div>こんにちは</div>
//   </React.Fragment>
//   );

////ループを使いたい場合（filter,mapメソッド）////
//tasks配列を作成
// const tasks=[
//   { id: 1 , title: 'one'},
//   { id: 2 , title: 'two'},
//   { id: 3 , title: 'three'},
//   { id: 4 , title: 'four'},
//   { id: 5 , title: 'five'}
// ];

//mapメソッドを使用して配列の中身を一つずつ表示していく
//for文は長くなるから使わない
// const num = tasks.map((val,index)=>{return <div>IDは{val.id}TITLEは{val.title}</div>});
// return(
//   <div>{num}</div>
// );

      
//filterメソッド
//task配列から、特定のものだけで配列を作り直す（今回はidが偶数）
// const num1 = tasks.filter((val1,index)=>{return val1.id % 2 === 0});
//mapメソッド
//num1の配列の中身を使って、新しい配列を作成する（<div>のjsxの配列）
//key要素の設定があるとレンダリング効率が良くなる
// const num2 =num1.map((val,index)=>{return <div　key={val.id}>{val.id}</div>})
// return <div>{num2}</div>

////条件分岐////

//即時関数
//関数内で条件分岐を行っている
//ぱっと見わかりずらいデメリット　あんまり使わない
// let isMorning = true
// return(
//   <div>
//     {(()=>{
//       if(isMorning){
//         return <span>Good Morning</span>
//       }else{
//         return <span>hello</span>
//       }
//     })()}
//   </div>
// )

//&&条件
//trueの時のみ右の処理が実行される
//処理がtrueの時のみ使用されるため、使用頻度はあまり多くない
// return(
//   <div>
//     {isMorning && <span>GoodMorning</span>}
//   </div>
// )

//三項演算子
//判定要素 ? true時の処理 : false時の処理 
// return (
//   <div>
//     {isMorning ? <span>GoodMorning</span> : <span>Hello</span>}
//   </div>
// )

//関数でコンポーネントを表現
//renderの中に処理を書く
//returnの中にタグを使用して呼び出し
// function Greeting(){
//   if(isMorning){
//     return <span>GoodMorning</span>
//   }else{
//     return <span>Hello</span>
//   }
// }
//
// return(
//   <div>
//     <Greeting/>
//   </div>
// )

//メソッド
// return(
//   <div>
//     {this.renderWithCondition(isMorning)}
//   </div>
// )


//イベント　
//onClick、onContextMenu、onDoubleClick、onDrag、onDrop 、onMouseDown、onMouseEnter などがある
//onClick={処理}　中に直接書くこともできる
//別のところで処理だけ書いてあとの代入することもできる
// return(
//   <button onClick = {() => {console.log('ヤッホー');}}>ボタン</button>
// )

     


  // }
// }


//component
//
// const App = () => {
//   return <div>
//     <Huga />
//     <Hoge />
//     <button onClick = {() => {console.log('hoi');}}>ボタン</button>
//   </div>
// }
// const Huga = () => {
//   return <div> hugahugahuga </div>
// }
// const Hoge = () => {
//   return <div> hogehoge</div>
// }

  //props
  //受け取るためのもの　親→子にデータを渡す
  //関数の引数に対してデータを渡す
  //タグの属性に値を渡す準備 データに{}をつけてJSのデータとして渡す

  // const Members =[
  //   {name: "taro", age: 12},
  //   {name: "jiro", age: 11},
  //   {name: "saburo", },

  // ]
  // //親コンポーネント
  // const App = () => {
  //   return (
  //     <div>
  //       {
  //         //mapメソッドでMembers配列の中を表示させる
  //         Members.map((men,index)=>{
  //           //親コンポーネントから子コンポーネントに値を渡す準備
  //           return <Member name={men.name} age={men.age} key={index} />
  //         })
  //       }
  //     </div>
  //   )
  // }
  
  // //子コンポーネント
  // //引数（props）で親コンポーネントからデータをもらってくる
  // const Member = (props) =>{
  //   return <div>I'm {props.name} age「{props.age}」</div>
  // }

  // //defaultProps
  // //値が入ってない場合はこの値を返却します、という設定をする。
  // Member.defaultProps ={
  //   age:10000
  // }

  // //propsの型チェック
  // Member.prototypes ={
  //   name:PropTypes.string
  // }

  //stateの値の変更
  //クラスの場合
  // class App extends Component {
  //   //this.stateの値を初期化
  //   constructor(props){
  //     super(props)
  //     //constructorではsetStateではなくthis.state
  //     this.state = {
  //       // クラスでは、コンストラクタ内で、this.stateの初期値をセット
  //       count:0
  //     }
  //   }
  //   render(){
  //     return(
  //       <React.Fragment>
  //         <p>現在の数字は{this.state.count}です</p>
  //         {/*ボタンをクリックした時に、this.setState()を呼ぶことでcountステート を更新 */}
  //         <button onClick={() => this.setState({ count: this.state.count + 1 })}> +1</button>
  //         <button onClick={() => this.setState({ count: this.state.count - 1 })}>　-1</button>
  //         <button onClick={() => this.setState({ count: 0 })}>0</button>
  //       </React.Fragment>
  //     )
  //   }
  // }

  //関数の場合
  // const App = () => {
  //   // count という名前の state 変数を宣言（値を入れる入れ物）、初期値 0 をセット
  //   const [count, setCount] = useState(0) 
  //   return (
  //   <div> <p>現在の数字は{count}です</p>
  //     {/* setCount()は、countを更新するための関数。countを引数で受け取ること も出来る */}
  //     <button onClick={() => setCount(prevState => prevState + 1)}> +1</button>
  //     <button onClick={() => setCount(count - 1)}>- 1</button> <button onClick={() => setCount(0)}>0</button>
  //   </div> )
  //   }
   

  // //todolistの作成//
  // //関数コンポーネントの作成
  // const App = () =>{
  //   //todoLists配列
  //   //todoListsの中身（state）の値を変更するためにuseStateの初期値を設定
  //   const [todoLists,setTodoList] = useState([])
  //   //配列の中身
  //   //todosの中身（state）の値を変更するためにuseStateの初期値を設定
  //   const [todos,setTodos] = useState('')
    
  //   //追加ボタンが押されたときの処理
  //   const Click=()=>{
  //     //todosが空（true）の時に返す（何もしない）
  //     if(todos === ''){
  //       return

  //     }else{
  //       //todosに値が入っていた（false）ときにtodosの値を変更
  //       //スプレット構文を使ってstateの値を変更
  //       setTodoList(todos => [...todoLists,{todos}])
  //       //テキストボックスの中身を空にする
  //       setTodos('')
  //     }
  //   }
  //   //todoListsの中身を一つずつ表示
  //   const hyouji = todoLists.map((a,index)=>{
  //     return <li key={index}>{a.todos}</li>
  //   })
  //   return (
  //     <React.Fragment>
  //       <div>TODOLIST</div>
  //       {/*テキストボックスの値をvalueで取ってきてtodosの値が変わった（onChange）時にstateの値を変更させる */}
  //       <input type='text'　value={todos} onChange={(e) => {setTodos(e.target.value) }}></input>
  //       <button onClick={Click}>追加</button>
  //       <ul>
  //           {hyouji}
  //       </ul>
  //     </React.Fragment>
         
      
  //     )

  // }


  // 関数コンポーネントの作成
  const App = () =>{
    //todoLists配列
    //todoListsの中身（state）の値を変更するためにuseStateの初期値を設定
    const [todoLists,setTodoList] = useState([])
    //配列の中身
    //todosの中身（state）の値を変更するためにuseStateの初期値を設定
    const [todos,setTodos] = useState('')
    
    //追加ボタンが押されたときの処理
    const Click = () => {
      //todosが空（true）の時に返す（何もしない）
      console.log(todos);
      console.log(todoLists);
      if (todos === ''){
        
        return
        
      }else{
        //todosに値が入っていた（false）ときにtodosの値を変更
        //スプレット構文を使ってstateの値を変更
        console.log(todos);
        setTodoList([...todoLists,{todos}])
        //テキストボックスの中身を空にする
        setTodos('')
      }
    }
    //todoListsの中身を一つずつ表示
    // const hyouji = todoLists.map((a,index)=>{
    //   return <li key={index}>{a.todos}</li>
    // })
    return (
      <React.Fragment>
        <div>TODOLIST</div>
        {/*テキストボックスの値をvalueで取ってきてtodosの値が変わった（onChange）時にstateの値を変更させる */}
        <input type='text'　value={todos} onChange={(e) => {setTodos(e.target.value) }}></input>
        <button onClick={Click}>追加</button>
        <ul>
            {/* {hyouji} */}
            {todoLists.map((a , index)=>(
              <li key={index}>{a.todos}</li>
            ))}
        </ul>
      </React.Fragment>
         
      
      )

  }

// const App = () => {
//   const [todoLists,setTodoList] = useState([])
//   const [todos,setTodos] = useState('')

//   return(
//       <React.Fragment>
//         <div>TODOLIST</div>
//         {/*テキストボックスの値をvalueで取ってきてtodosの値が変わった（onChange）時にstateの値を変更させる */}
//         <input type='text'　value='' ></input>
//         <button >追加</button>
//         <ul>
//             {/* {hyouji} */}
//             {todoLists.map((a , index)=>(
//               <li key={index}>{a.todos}</li>
//             ))}
//         </ul>
//       </React.Fragment>

//   )
// }

//   class App extends React.Component{
//     render(){
//       const props = this.props
//       return(
//         <React.Fragment>
//         <p>現在の数字は{props.val}です</p>
//         <button onClick={props.countPlus}>
//           +1
//         </button>
//         <button onClick={props.countMinus}>
//           -1
//         </button>
//       </React.Fragment>

//       )
//     }
//   }
//   const mapStateToProps =state =>({
//     val: state.counter.val
//   })
// const mapDispatchToProps = dispatch =>({

//   //()=>dispatch(countPlus())という関数を、countPlusという名前で子コンポーネントに渡す。という意味
//   countPlus:()=>dispatch(countPlus()),
//   countMinus:()=>dispatch(countMinus())
// })

export default (App)