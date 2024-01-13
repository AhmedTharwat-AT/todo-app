import CreateTodo from "./CreateTodo";
import Header from "./Header";
import TodosList from "./TodosList";

function AppLayout() {
  return (
    <div className="bp:pt-20 mx-auto pt-14 md:max-w-[690px]">
      <Header />
      <CreateTodo />
      <TodosList />
    </div>
  );
}

export default AppLayout;
