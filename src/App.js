import React,{useState} from 'react';
import './App.css';

function App() {
// 状態管理
 const [number1,setNumber1] = useState(0); // 1つ目
 const [number2,setNumber2] = useState(0); // 2つ目
 const [result,setResult] = useState(0);   // 結果

// 足し算の実行
const handleAddition = () => {
 setResult(parseInt(number1) + parseInt(number2));
};
 return (
    <div className="App">
      <header className="App-header">
      <h1>足し算アプリ</h1>
      <div>
        {/*一つ目の入力*/}
        <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        />
        <span> + </span>
        {/*二つ目の入力*/}
        <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <br />
      {/*ボタン*/}
      <button onClick={handleAddition}>計算する!</button>
      <p>
        **答え：{result}**{/*結果*/}
      </p>
      </header>
    </div>
  );
}

export default App;
