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
      <section className=" divide-y divide-gray-700 ">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <TodoStyle className="justify-center py-5">
            <h1>there are no {filter} todos !</h1>
          </TodoStyle>
        )}
      </section>
      <TodoStyle className="items-center justify-between  border-t border-gray-700 px-6 py-5 text-gray-500">
        <TodosLeft todos={todos} />
        <TodosFilter className="" setFilter={setFilter} filter={filter} />
        <ClearCompleted />
      </TodoStyle>
    </main>
  );
}

export default TodosList;
