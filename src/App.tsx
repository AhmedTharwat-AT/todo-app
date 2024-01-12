import AppLayout from "./components/AppLayout";
import TodoProvider from "./context/TodoContext";

function App() {
  return (
    <div>
      <div className="sm:bg-desk-dark bg-mobile-dark relative flex min-h-screen w-full flex-col bg-[var(--dark-gray-700)] bg-[length:100%_35%] bg-no-repeat">
        <div className="container">
          <TodoProvider>
            <AppLayout />
          </TodoProvider>
        </div>
        <p className="mb-6 mt-auto text-center text-gray-600">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
}

export default App;
