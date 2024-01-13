import { useState } from "react";

import TodoStyle from "./TodoStyle";
import { useTodos } from "../context/TodoContext";

function CreateTodo() {
  const [value, setVlaue] = useState("");
  const { dispatch } = useTodos();

  function handleAdd() {
    if (!value) return;
    const todo = {
      id: crypto.randomUUID(),
      text: value,
      checked: false,
      createdAt: new Date().toDateString(),
    };
    dispatch({ type: "todo/add", payload: todo });
    setVlaue("");
  }

  return (
    <TodoStyle className="mt-10 rounded-md px-6 py-5 shadow-2xl ">
      <button
        onClick={handleAdd}
        className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 text-3xl text-gray-300 hover:bg-check-background hover:text-white"
      >
        +
      </button>
      <input
        autoFocus
        type="text"
        onKeyDown={(e) => {
          if (e.key == "Enter") handleAdd();
        }}
        onChange={(e) => setVlaue(e.target.value)}
        value={value}
        placeholder="Create a new todo..."
        className="grow bg-transparent px-2 text-lg  text-gray-300 caret-[var(--color-bright-blue)] placeholder:text-[var(--dark-gray-300)] focus:outline-none"
      />
    </TodoStyle>
  );
}

export default CreateTodo;
