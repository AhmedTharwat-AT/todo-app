import CreateTodo from "./CreateTodo";
import Header from "./Header";
import TodosList from "./TodosList";

function AppLayout() {
  return (
    <div className="mx-auto pt-20 md:max-w-[690px]">
      <Header />
      <CreateTodo />
      <TodosList />
    </div>
  );
}

export default AppLayout;
