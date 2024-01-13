import { useTodos } from "../context/TodoContext";

function ClearCompleted() {
  const { dispatch } = useTodos();

  function handleClearCompleted() {
    dispatch({ type: "todo/deleteComplete" });
  }

  return (
    <button
      onClick={handleClearCompleted}
      className="bp:text-sm text-xs tracking-wide text-gray-500 hover:underline  dark:text-gray-400"
    >
      Clear Completed
    </button>
  );
}

export default ClearCompleted;
