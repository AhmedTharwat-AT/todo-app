import { Todo } from "../types/App.types";

export function reducer(
  state: Todo[],
  action: { type: string; payload?: any },
) {
  switch (action.type) {
    case "todo/init":
      return [...action.payload];
    case "todo/add":
      return [...state, action.payload];
    case "todo/delete": {
      //payload = todo id
      const todos = [...state];
      const targetIndex = todos.findIndex((todo) => todo.id === action.payload);
      todos.splice(targetIndex, 1);
      return [...todos];
    }
    case "todo/toggle": {
      //payload = todo id
      const todos = [...state];
      const targetIndex = todos.findIndex(
        (todo) => todo.id === action.payload.tId,
      );
      todos[targetIndex].checked = action.payload.status;
      return todos;
    }
    case "todo/deleteComplete": {
      const todos = [...state];
      const newTodos = todos.filter((todo) => !todo.checked);
      return [...newTodos];
    }
    default:
      return [...state];
  }
}
