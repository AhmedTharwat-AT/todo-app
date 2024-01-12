import { createContext, useContext, useReducer } from "react";
import { reducer } from "./todosReducer";

interface Props {
  children: JSX.Element | JSX.Element[] | string | number;
}

type Todo = {
  id: number;
  text: string;
  checked: boolean;
  createdAt: string;
};

const TodoContext = createContext<{
  todos: Todo[];
  dispatch: React.Dispatch<any>;
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
