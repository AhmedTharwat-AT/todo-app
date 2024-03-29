import { useTodos } from "../context/TodoContext";

import Checkbox from "./Checkbox";
import TodoStyle from "./TodoStyle";

type Todo = {
  id: number;
  text: string;
  checked: boolean;
  createdAt: string;
};

interface Props {
  todo: Todo;
  isDragging: boolean;
}

const Todo = ({ todo, isDragging }: Props) => {
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
    <TodoStyle
      key={todo.id}
      className={`${
        isDragging
          ? "rounded-md border border-blue-400 opacity-90 dark:border-blue-700"
          : " opacity-100 "
      } group items-center px-6  py-4`}
    >
      <Checkbox
        handler={handleToggle}
        className={
          todo.checked ? "bg-check-background" : "hover:border-blue-500"
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
              todo.checked
                ? "text-gray-400 line-through  dark:text-gray-500"
                : ""
            } hyphens-auto break-all text-sm text-[var(--light-gray-600)] dark:text-[var(--dark-gray-200)] bp:text-base`}
          >
            {todo.text}
          </h3>
          <p className="text-xs lowercase text-gray-500 bp:text-sm">
            {todo.createdAt}
          </p>
        </div>

        <div
          onClick={handleDelete}
          className="h-5 w-5 min-w-[20px] cursor-pointer bg-contain bg-no-repeat opacity-0 duration-500 group-hover:bg-icon-cross group-hover:opacity-100"
        ></div>
      </div>
    </TodoStyle>
  );
};
export default Todo;
