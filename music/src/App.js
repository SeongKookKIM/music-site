import React, { useState } from "react";
import "./App.css";
import "./Media.css";
import Background from "./components/Background";
import Time from "./components/Time";
import Todo from "./pages/Todo";
import MusicList from "./pages/MusicList";
import Player from "./components/Player";

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
      <Player />
    </div>
  );
}

export default App;
