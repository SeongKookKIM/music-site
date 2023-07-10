import { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Time from "./components/Time";

function App() {
  const [todoText, setTodoText] = useState("");
  const [arrayTodo, setArrayTodo] = useState([]);
  const [activeSpan, setActiveSpan] = useState("all");

  function handlerTodoEnter(e) {
    setTodoText(e.target.value);
    if (todoText && e.key == "Enter") {
      let a = todoText;
      arrayTodo.push(a);
      setTodoText("");
      e.target.value = "";
    }
  }

  function handleClick(e) {
    setActiveSpan(e.target.id);
  }

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
            <input
              type="text"
              placeholder="Add a new task"
              onKeyUp={(e) => {
                handlerTodoEnter(e);
              }}
            />
          </div>
          <div className="controls">
            <div className="filters">
              <span
                id="all"
                className={activeSpan === "all" ? "active" : ""}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                전체보기
              </span>
              <span
                id="pending"
                className={activeSpan === "pending" ? "active" : ""}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                보류
              </span>
              <span
                id="completed"
                className={activeSpan === "completed" ? "active" : ""}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                완료
              </span>
            </div>
            <button
              className="clear-btn"
              onClick={() => {
                setArrayTodo([]);
              }}
            >
              Clear All
            </button>
          </div>
          <ul className="task-box">
            {arrayTodo.map((todo, idx) => {
              return (
                <li className="task" key={idx}>
                  <label htmlFor={idx}>
                    <input type="checkbox" id={idx} />
                    <p>{todo}</p>
                    <div className="settings">···</div>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
