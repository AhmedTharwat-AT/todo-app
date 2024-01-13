import { createContext, useContext, useReducer } from "react";
import { reducer } from "./todosReducer";
import { Todo } from "../ts/types";

interface Props {
  children: JSX.Element | JSX.Element[] | string | number;
}

const TodoContext = createContext<{
  todos: Todo[];
  dispatch: React.Dispatch<{
    type: string;
    payload?: any;
  }>;
}>({ todos: [], dispatch: () => null });

function TodoProvider({ children }: Props) {
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  const { todos, dispatch } = context || {};
  return { todos, dispatch };
}

export default TodoProvider;
