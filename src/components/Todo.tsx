import { useTodos } from "../context/TodoContext";
import TodoStyle from "./TodoStyle";
type Todo = {
  id: number;
  text: string;
  checked: boolean;
  createdAt: string;
};

function Todo({ todo }: { todo: Todo }) {
  const { dispatch } = useTodos();

  function handleToggle() {
    dispatch({
      type: "todo/toggle",
      payload: { tId: todo.id, status: !todo.checked },
    });
  }

  function handleDelete() {
    dispatch({
      type: "todo/delete",
      payload: todo.id,
    });
  }

  return (
    <TodoStyle key={todo.id} className="group items-center px-6  py-4">
      <div
        onClick={handleToggle}
        className={`${
          todo.checked ? "bg-check-background" : "hover:border-blue-400"
        } flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-700 text-3xl text-gray-300 transition-all hover:text-white`}
      >
        <span
          className={`${
            todo.checked ? "bg-icon-check" : ""
          } h-3 w-3 bg-contain bg-no-repeat text-white`}
        ></span>
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="px-2">
          <div className={todo.checked ? "text-gray-500 line-through" : ""}>
            {todo.text}
          </div>
          <p className="text-sm lowercase text-gray-500">{todo.createdAt}</p>
        </div>

        <div
          onClick={handleDelete}
          className="group-hover:bg-icon-cross h-5 w-5 cursor-pointer  bg-contain bg-no-repeat opacity-0 transition-all group-hover:opacity-100"
        ></div>
      </div>
    </TodoStyle>
  );
}

export default Todo;
