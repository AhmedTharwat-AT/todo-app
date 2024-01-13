import { useState } from "react";

import TodoStyle from "./TodoStyle";
import { useTodos } from "../context/TodoContext";
import Checkbox from "./Checkbox";

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
    <TodoStyle className="mt-10 rounded-md shadow-2xl ">
      <Checkbox
        handler={handleAdd}
        className="hover:border-blue-400 hover:text-blue-200"
      >
        <span className="text-gray-400 dark:text-gray-300">+</span>
      </Checkbox>
      <input
        autoFocus
        type="text"
        onKeyDown={(e) => {
          if (e.key == "Enter") handleAdd();
        }}
        onChange={(e) => setVlaue(e.target.value)}
        value={value}
        placeholder="Create a new todo..."
        className="bp:text-base grow bg-transparent px-2 text-sm  text-gray-800 caret-[var(--color-bright-blue)] placeholder:text-[var(--dark-gray-300)] focus:outline-none dark:text-gray-300"
      />
    </TodoStyle>
  );
}

export default CreateTodo;
