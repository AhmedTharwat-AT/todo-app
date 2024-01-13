import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import EmptyList from "./EmptyList";
import Todo from "./Todo";
import TodoStyle from "./TodoStyle";
import TodosFilter from "./TodosFilter";
import TodosLeft from "./TodosLeft";

import { Todo as TodoType } from "../ts/types";
import ClearCompleted from "./ClearCompleted";

function TodosList() {
  const { todos, dispatch } = useTodos();
  const [filter, setFilter] = useState("all");
  let filteredTodos: TodoType[] = [];

  switch (filter) {
    case "all": {
      filteredTodos = [...todos];
      break;
    }
    case "active": {
      filteredTodos = todos.filter((todo) => !todo.checked);
      break;
    }
    case "completed": {
      filteredTodos = todos.filter((todo) => todo.checked);
      break;
    }
  }

  if (todos.length == 0) return <EmptyList />;

  return (
    <main className="mt-5 overflow-hidden rounded-md ">
      <section className="bp:max-h-[509px] max-h-[275px] divide-y divide-gray-300 overflow-y-auto shadow-2xl dark:divide-gray-700">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <TodoStyle className="bp:py-9 justify-center py-7">
            <h3
              onClick={() => dispatch({ type: "todo/test" })}
              className="bp:text-base text-sm normal-case text-[var(--light-gray-600)] dark:text-[var(--dark-gray-200)]"
            >
              There are no {filter} todos !
            </h3>
          </TodoStyle>
        )}
      </section>

      <TodoStyle className="items-center justify-between rounded-bl-md  rounded-br-md border-t border-gray-300  dark:border-gray-700 ">
        <TodosLeft todos={todos} />
        <TodosFilter
          className="bp:flex hidden text-gray-500"
          setFilter={setFilter}
          filter={filter}
        />
        <ClearCompleted />
      </TodoStyle>

      {/* small screen */}
      <TodoStyle className="bp:hidden mt-5 flex justify-center rounded-md py-3  shadow-2xl">
        <TodosFilter className="" setFilter={setFilter} filter={filter} />
      </TodoStyle>
    </main>
  );
}

export default TodosList;
