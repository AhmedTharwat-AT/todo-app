import { Todo } from "../ts/types";

function TodosLeft({ todos }: { todos: Todo[] }) {
  const activeTodos = todos.filter((todo) => !todo.checked).length;
  return (
    <p className="text-sm">
      {activeTodos > 0
        ? activeTodos == 1
          ? `1 item left`
          : `${activeTodos} items left`
        : "all completed 🎉"}
    </p>
  );
}

export default TodosLeft;
