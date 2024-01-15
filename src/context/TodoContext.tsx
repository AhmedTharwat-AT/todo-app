import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./todosReducer";
import { Todo } from "../types/App.types";

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
  const [sync, setSync] = useState(false);

  // sync local storage only after initializing state
  useEffect(() => {
    if (!sync) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [sync, todos]);

  // initialise state from localStorage if it exists
  useEffect(() => {
    if (sync) return;
    const todosLocal: string | [] = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos") as string)
      : [];

    if (todos.length == 0 && todosLocal && todosLocal.length > 0) {
      dispatch({ type: "todo/init", payload: todosLocal });
    }

    setSync(true);
  }, [todos, sync]);

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
