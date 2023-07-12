import React from "react";
import { useState } from "react";

function List({ todo, setTodos }) {
  const [filter, setFilter] = useState("all");
  const clearTodo = () => {
    const newTodo = [];
    setTodos(newTodo);
  };
  const deleteTodo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };
  const filteredTodos = todo.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "completed") {
      return todo.completed;
    } else return !todo.completed;
  });
  const toggleCompleted = (index) => {
    const newTodos = [...todo];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  return (
    <div>
      <section class="main">
        <input class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>

        <ul class="todo-list">
          {filteredTodos.map((t, index) => {
            return (
              <li key={index}>
                <div class="view">
                  <input
                    class="toggle"
                    type="checkbox"
                    onChange={() => toggleCompleted(index)}
                  />
                  <label className="todo">{t.lesson}</label>
                  <button class="destroy" onClick={deleteTodo}></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>{todo.length}</strong>
          items left
        </span>

        <ul class="filters">
          <li>
            <button onClick={() => setFilter("all")} class="selected">
              All
            </button>
          </li>
          <li>
            <button onClick={() => setFilter("active")}>Active</button>
          </li>
          <li>
            <button onClick={() => setFilter("completed")}>Completed</button>
          </li>
        </ul>

        <button class="clear-completed" onClick={clearTodo}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default List;
