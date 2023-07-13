import React, { Suspense, lazy, useDeferredValue, useState } from "react";
import "./App.css";
import "./Media.css";

const Background = lazy(() => import("./components/Background"));
const Time = lazy(() => import("./components/Time"));
const Todo = lazy(() => import("./pages/Todo"));
const MusicList = lazy(() => import("./pages/MusicList"));
const Player = lazy(() => import("./components/Player"));

function App() {
  const [tab, setTab] = useState(true);

  let state1 = useDeferredValue(tab);

  return (
    <div className="App">
      <Suspense fallback={<div>로딩중</div>}>
        <Background />
        <Time />
      </Suspense>
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
        <Suspense fallback={<div>로딩중...</div>}>
          {state1 ? <Todo /> : <MusicList />}
        </Suspense>
      </div>
      <Suspense fallback={<div>로딩중...</div>}>
        <Player />
      </Suspense>
    </div>
  );
}

export default App;
