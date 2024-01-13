import { useTodos } from "../context/TodoContext";

function ClearCompleted() {
  const { dispatch } = useTodos();

  function handleClearCompleted() {
    dispatch({ type: "todo/deleteComplete" });
  }

  return (
    <button onClick={handleClearCompleted} className="text-sm hover:underline">
      Clear Completed
    </button>
  );
}

export default ClearCompleted;
