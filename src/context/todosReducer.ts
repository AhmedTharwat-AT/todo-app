type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

export function reducer(
  state: Todo[],
  action: { type: string; payload?: any },
) {
  switch (action.type) {
    case "todo/add":
      return [...state, action.payload];
    case "todo/delete": {
      const todos = [...state];
      const targetIndex = todos.findIndex((todo) => todo.id === action.payload);
      todos.splice(targetIndex, 1);
      return [...todos];
    }
    case "todo/toggle": {
      const todos = [...state];
      const targetIndex = todos.findIndex((todo) => todo.id === action.payload);
      todos[targetIndex].checked = !todos[targetIndex].checked;
      return [...todos];
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
