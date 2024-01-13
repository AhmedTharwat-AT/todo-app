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
  const { todos } = useTodos();
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
    <main className="mt-5 overflow-hidden rounded-md shadow-2xl">
      <section className="bp:max-h-[509px] max-h-[275px] divide-y divide-gray-700 overflow-y-auto">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <TodoStyle className="justify-center ">
            <h3 className="bp:text-base text-sm normal-case">
              There are no {filter} todos !
            </h3>
          </TodoStyle>
        )}
      </section>

      <TodoStyle className="items-center justify-between  rounded-bl-md rounded-br-md border-t border-gray-700  text-gray-500">
        <TodosLeft todos={todos} />
        <TodosFilter
          className="bp:flex hidden"
          setFilter={setFilter}
          filter={filter}
        />
        <ClearCompleted />
      </TodoStyle>
      {/* small screen */}
      <TodoStyle className="bp:hidden mt-5 flex justify-center rounded-md py-3 text-gray-500">
        <TodosFilter className="" setFilter={setFilter} filter={filter} />
      </TodoStyle>
    </main>
  );
}

export default TodosList;
