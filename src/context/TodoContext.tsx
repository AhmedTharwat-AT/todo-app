import { createContext, useReducer } from "react";
import { reducer } from "./todosReducer";

interface Props {
  children: JSX.Element | JSX.Element[] | string | number;
}

type Todo = {
  id: number;
  text: string;
  checked: boolean;
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

export default TodoProvider;
