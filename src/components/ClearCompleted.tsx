import { useTodos } from "../context/TodoContext";

function ClearCompleted() {
  const { dispatch } = useTodos();

  function handleClearCompleted() {
    dispatch({ type: "todo/deleteComplete" });
  }

  return (
    <button
      onClick={handleClearCompleted}
      className="bp:text-sm text-xs tracking-wide hover:underline"
    >
      Clear Completed
    </button>
  );
}

export default ClearCompleted;
