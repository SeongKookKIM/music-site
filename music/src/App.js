import React, { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Time from "./components/Time";
import Todo from "./pages/Todo";
import MusicList from "./pages/MusicList";

function App() {
  const [tab, setTab] = useState(true);

  return (
    <div className="App">
      <Background />
      <Time />
      <div className="main">
        <nav>
          <ul>
            <li
              onClick={() => {
                setTab(true);
              }}
            >
              To Do
            </li>
            <li
              onClick={() => {
                setTab(false);
              }}
            >
              Music
            </li>
          </ul>
        </nav>
        {tab ? <Todo /> : <MusicList />}
      </div>
    </div>
  );
}

export default App;
