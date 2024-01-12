import CreateTodo from "./CreateTodo";
import Header from "./Header";
import TodosList from "./TodosList";

function AppLayout() {
  return (
    <div className="pt-20">
      <Header />
      <CreateTodo />
      <TodosList />
    </div>
  );
}

export default AppLayout;
