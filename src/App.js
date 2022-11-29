import React, { useState } from "react";
import "./index.css";
// composant form todo list et todo

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // Ajoute la todo a la liste
    // ... => ajoute la nouvelle todo aux éléments déjà existants
    setList([...list, newTodo]);

    // clear l'input
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };
  return (
    <div className="App">
      <h1>Todo list</h1>
      <input
        type="text"
        value={input.value}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={() => addTodo(input)} className="AddButton">
        Add
      </button>

      <ul className="Note">
        {list.map((todo) => (
          <li>
            {todo.todo}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="DeleteButton"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
