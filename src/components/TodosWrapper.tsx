import { useState } from "react";
import { useTodos } from "../context/TodoContext";

import EmptyList from "./EmptyList";
import Todo from "./Todo";
import TodoStyle from "./TodoStyle";
import TodosFilter from "./TodosFilter";
import TodosLeft from "./TodosLeft";

import { Todo as TodoType } from "../types/App.types";
import ClearCompleted from "./ClearCompleted";
import TodosList from "./TodosList";

function TodosWrapper() {
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

  if (todos.length == 0)
    return (
      <EmptyList className="mt-5 rounded-md " msg="Add todos to your list !" />
    );

  return (
    <main className="mt-5 overflow-hidden rounded-md ">
      {filteredTodos.length > 0 ? (
        <TodosList filteredTodos={filteredTodos} />
      ) : (
        <EmptyList msg={` There are no ${filter} todos !`} />
      )}

      <TodoStyle className="items-center justify-between rounded-bl-md  rounded-br-md border-t border-gray-300  dark:border-gray-700 ">
        <TodosLeft todos={todos} />
        <TodosFilter
          className="hidden text-gray-500 bp:flex"
          setFilter={setFilter}
          filter={filter}
        />
        <ClearCompleted />
      </TodoStyle>

      {/* small screen */}
      <TodoStyle className="mt-5 flex justify-center rounded-md py-3 shadow-2xl  bp:hidden">
        <TodosFilter className="" setFilter={setFilter} filter={filter} />
      </TodoStyle>
    </main>
  );
}

export default TodosWrapper;
