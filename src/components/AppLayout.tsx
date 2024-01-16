import CreateTodo from "./CreateTodo";
import Header from "./Header";
import TodosWrapper from "./TodosWrapper";

function AppLayout() {
  return (
    <div className="mx-auto pt-14 bp:pt-20 md:max-w-[690px]">
      <Header />
      <CreateTodo />
      <TodosWrapper />
    </div>
  );
}

export default AppLayout;
