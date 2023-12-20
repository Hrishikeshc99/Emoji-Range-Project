import logo from './logo.svg';
import './App.css';
import react, {useEffect, useState} from "react";

function App() {
const[data, setData]=useState(0)
const [value, setvalue] = useState()
const faces=()=>{
  // <h1>😀😃😄😁😆😅😂🤣</h1>
}
useEffect(()=>{
  if(data == 0){
  setvalue("😀")
  }else if(data == 2){
    setvalue("😃")
  }else if(data == 4){
    setvalue("😄")
  }else if(value==6){
    setvalue("😁")
  }else if(data == 8){
    setvalue("😆")
  }else if(data == 10){
    setvalue("😅")
  }else if(data == 12){
    setvalue("😂")
  }else if(data == 14){
    setvalue("🤣")
  }
},[data])
  return (
    <div className="App">
      <h1>Emoji Range project</h1>
      <h1> {value}</h1>
      <input type="range" min={0} max={14} range={2} value={data} onChange={(e)=>setData(e.target.value)}></input>
     <h1> {data}</h1>
    </div>
  );
}

export default App;
