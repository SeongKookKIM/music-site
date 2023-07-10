import { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Time from "./components/Time";

function App() {
  const [todoText, setTodoText] = useState("");
  const [arrayTodo, setArrayTodo] = useState([]);
  const [activeSpan, setActiveSpan] = useState("all");
  const [hold, setHold] = useState("");
  const [showTodoBox, setShowTodoBox] = useState(null);

  useEffect(() => {
    const storedArrayTodo = localStorage.getItem("arrayTodo");
    if (storedArrayTodo) {
      setArrayTodo(JSON.parse(storedArrayTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("arrayTodo", JSON.stringify(arrayTodo));
  }, [arrayTodo]);

  function handlerTodoEnter(e) {
    setTodoText(e.target.value);
    if (todoText && e.key === "Enter") {
      let a = { text: todoText, check: false };
      setArrayTodo((prev) => [...prev, a]);
      setTodoText("");
      e.target.value = "";
    }
  }

  function handleClick(e) {
    setActiveSpan(e.target.id);
  }

  function handlerChecked(idx) {
    const updatedArrayTodo = arrayTodo.map((todo, index) => {
      if (index === idx) {
        return { ...todo, check: !todo.check };
      }
      return todo;
    });
    setArrayTodo(updatedArrayTodo);
  }

  function filterArrayTodo() {
    if (activeSpan === "pending") {
      return arrayTodo.filter((todo) => !todo.check);
    } else if (activeSpan === "completed") {
      return arrayTodo.filter((todo) => todo.check);
    }

    return arrayTodo;
  }

  function handleDeleted() {
    const idx = showTodoBox;
    if (idx !== undefined) {
      const updatedArrayTodo = arrayTodo.filter((todo, index) => {
        return index !== idx;
      });
      setArrayTodo(updatedArrayTodo);
      setShowTodoBox(undefined);
    }
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
                  setHold("");
                }}
              >
                전체보기
              </span>
              <span
                id="pending"
                className={activeSpan === "pending" ? "active" : ""}
                onClick={(e) => {
                  handleClick(e);
                  setHold("hold");
                }}
              >
                보류
              </span>
              <span
                id="completed"
                className={activeSpan === "completed" ? "active" : ""}
                onClick={(e) => {
                  handleClick(e);
                  setHold("hold");
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
            {filterArrayTodo().map((todo, idx) => {
              return (
                <li className="task" key={idx}>
                  <label htmlFor={idx} className={hold}>
                    <input
                      type="checkbox"
                      id={idx}
                      onChange={() => handlerChecked(idx)}
                      checked={todo.check}
                    />
                    <p>{todo.text}</p>
                  </label>
                  <div
                    className={`settings ${hold}`}
                    onMouseEnter={() => {
                      setShowTodoBox(idx);
                    }}
                  >
                    ···
                  </div>
                  <div
                    className={`todo-box ${showTodoBox === idx ? "show" : ""}`}
                    onMouseLeave={() => {
                      setShowTodoBox(undefined);
                    }}
                  >
                    <ul>
                      <li
                        onClick={() => {
                          handleDeleted();
                        }}
                      >
                        삭제
                      </li>
                    </ul>
                  </div>
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
