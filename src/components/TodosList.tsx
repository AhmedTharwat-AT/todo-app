import Todo from "./Todo";
import { Todo as TodoType } from "../types/App.types";

interface Props {
  filteredTodos: TodoType[];
}

function TodosList({ filteredTodos }: Props) {
  return (
    <section className="max-h-[275px] divide-y divide-gray-300 overflow-y-auto shadow-2xl dark:divide-gray-700 bp:max-h-[509px]">
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  );
}

export default TodosList;
