import { useTodos } from "../context/TodoContext";
import Todo from "./Todo";

function TodosList() {
  const { todos } = useTodos();
  if (todos.length == 0) return <h1>add new todo now</h1>;
  return (
    <div className="mt-5 divide-y divide-gray-700 overflow-hidden rounded-md shadow-2xl">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodosList;
