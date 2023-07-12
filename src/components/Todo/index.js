import React, { useState } from "react";
import Create from "./Create";
import List from "./List";

function Todo() {
  const [todo, setTodo] = useState([
    {
      lesson: "Learn Javascript",
    },
    {
      lesson: "Learn React",
    },
  ]);
  return (
    <div>
      <header class="header">
        <h1>todos</h1>
        <Create addTodo={setTodo} todo={todo} />
      </header>
      <List setTodos={setTodo} todo={todo} />
    </div>
  );
}

export default Todo;
