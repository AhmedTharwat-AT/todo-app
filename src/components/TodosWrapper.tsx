import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import EmptyList from "./EmptyList";
import TodoStyle from "./TodoStyle";
import TodosFilter from "./TodosFilter";
import TodosLeft from "./TodosLeft";

import { Todo as TodoType } from "../types/App.types";
import ClearCompleted from "./ClearCompleted";
import TodosList from "./TodosList";

function TodosWrapper() {
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

  function handleDragEnd(result: DropResult) {
    const source = result.source.index;
    const destination = result.destination?.index;
    if (destination == undefined || source == destination) return;

    const newOrder = Array.from(todos);
    const [removed] = newOrder.splice(source, 1);
    newOrder.splice(destination, 0, removed);

    dispatch({ type: "todo/init", payload: newOrder });
  }

  if (todos.length == 0)
    return (
      <EmptyList className="mt-5 rounded-md " msg="Add todos to your list !" />
    );

  return (
    <main className="mt-5 overflow-hidden rounded-md ">
      {filteredTodos.length > 0 ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodosList filteredTodos={filteredTodos} filter={filter} />
        </DragDropContext>
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
