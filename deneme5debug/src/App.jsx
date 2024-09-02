import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [not1, setNot1] = useState(0);
  const [not2, setNot2] = useState(0);

  const averange = () => {
    debugger
    const result = sum()/2;
    console.log(result)
  };
  const sum = () => {
    return not1 + not2;
  };

  return (
    <>
      <div>
        <div>
          <input type="number" onChange={(e) => setNot1(Number(e.target.value))} value={not1}></input>
        </div>
        <div>
          <input type="number" onChange={(e) => setNot2(Number(e.target.value))} value={not2}></input>
        </div>
        <div>
          <button onClick={()=>averange()}>ortalama hesapla</button>
        </div>
      </div>
    </>
  );
}

export default App;
