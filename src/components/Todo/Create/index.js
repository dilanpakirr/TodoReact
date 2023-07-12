import React, { useState } from "react";

function Create({ addTodo, todo }) {
  const initialForm = { lesson: "" };
  const [form, setForm] = useState(initialForm);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo([...todo, form]);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            name="lesson"
            class="new-todo"
            placeholder="What needs to be done?"
            value={form.lesson}
            onChange={onChangeInput}
          />
        </div>
      </form>
    </div>
  );
}

export default Create;
