import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("her zaman");
  });
  useEffect(() => {
    console.log("ilk render edildiğinde");
  }, []);

  useEffect(() => {
    // console.log("ilk render edildiğinde  ve firstname state değiştiğinde");
    console.log("ilk render edildiğinde  ve  state değiştiğinde");
  }, [firstName,lastName]);

  // useEffect(() => {
  //   console.log("ilk render edildiğinde  ve lastname state değiştiğinde");
  // }, [lastName]);
  return (
    <>
      <div>
        <div> <button onClick={()=>setFirstName("Merhaba")}> Adı değiştir</button></div>
        <div> <button onClick={()=>setLastName("Dünya")}> Soyadı değiştir</button></div>
      </div>
    </>
  );
}

export default App;
