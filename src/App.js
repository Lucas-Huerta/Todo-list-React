import React, { useState } from "react";

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
  return (
    <div>
      <h1>Todo list</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={() => addTodo(input)}>Add</button>
    </div>
  );
}

export default App;
