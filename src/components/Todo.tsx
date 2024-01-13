import { useTodos } from "../context/TodoContext";
import Checkbox from "./Checkbox";
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
      <Checkbox
        handler={handleToggle}
        className={
          todo.checked ? "bg-check-background" : "hover:border-blue-400"
        }
      >
        <span
          className={`${
            todo.checked ? "bg-icon-check" : ""
          } h-3 w-3  bg-contain bg-no-repeat text-white`}
        ></span>
      </Checkbox>

      <div className="flex w-full items-center justify-between">
        <div className="px-2">
          <h3
            className={`${
              todo.checked ? "text-gray-500 line-through" : ""
            } bp:text-base hyphens-auto break-all text-sm`}
          >
            {todo.text}
          </h3>
          <p className="bp:text-sm text-xs lowercase text-gray-500">
            {todo.createdAt}
          </p>
        </div>

        <div
          onClick={handleDelete}
          className="h-5 w-5 min-w-[20px] cursor-pointer bg-contain bg-no-repeat opacity-0 transition-all group-hover:bg-icon-cross group-hover:opacity-100"
        ></div>
      </div>
    </TodoStyle>
  );
}

export default Todo;
