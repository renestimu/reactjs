import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import { list } from "./Data";
import Liste from "./Liste";
import './css/list.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <div className="list-main">
      {
        list?.map((l)=>(
          <Liste key={l.id} list={l}></Liste>
        ))
      }
      </div>
    </div>
  );
}

export default App;
