import Checkbox from "./Checkbox";
import Todo from "./Todo";

function CreateTodo() {
  return (
    <Todo className="mt-8">
      <div className="flex gap-3">
        <button className="hover:bg-check-background flex h-7 w-7 items-center justify-center rounded-full text-3xl text-white">
          +
        </button>
        <input
          autoFocus
          type="text"
          placeholder="Create a new todo..."
          className="grow bg-transparent px-2 caret-[var(--color-bright-blue)] placeholder:text-[var(--dark-gray-300)] focus:outline-none"
        />
      </div>
    </Todo>
  );
}

export default CreateTodo;
