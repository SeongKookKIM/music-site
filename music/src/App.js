import "./App.css";
import Background from "./components/Background";
import Time from "./components/Time";

function App() {
  return (
    <div className="App">
      <Background />
      <Time />
      <div className="main">
        <nav>
          <ul>
            <li>To Do</li>
            <li>Music</li>
          </ul>
        </nav>

        <div className="wrapper">
          <div className="task-input">
            <img
              src="assets/image/menu-bar.svg"
              alt="menu-bar"
              style={{ width: "20px" }}
            />
            <input type="text" placeholder="Add a new task" />
          </div>
          <div className="controls">
            <div className="filters">
              <span id="all" className="active">
                전체보기
              </span>
              <span id="pending">보류</span>
              <span id="completed">완료</span>
            </div>
            <button className="clear-btn">Clear All</button>
          </div>
          <ul className="task-box">
            <li className="task">
              <label htmlFor="2">
                <input type="checkbox" id="2" />
                <p>Create a video Youtube</p>
                <div className="settings">···</div>
              </label>
            </li>
            <li className="task">
              <label htmlFor="3">
                <input type="checkbox" id="3" />
                <p>Write a blog abot trends</p>
                <div className="settings">···</div>
              </label>
            </li>
            <li className="task">
              <input type="checkbox" id="4" />
              <p>Send poroject file to the client</p>
              <div className="settings">···</div>
            </li>
            <li className="task">
              <input type="checkbox" id="5" />
              <p>Discuss new project with team</p>

              <div className="settings">···</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
