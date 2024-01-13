import AppLayout from "./components/AppLayout";
import TodoProvider from "./context/TodoContext";

function App() {
  return (
    <div>
      <div className="relative flex min-h-screen w-full flex-col bg-[var(--dark-gray-700)] bg-mobile-dark bg-[length:100%_35%] bg-no-repeat sm:bg-desk-dark">
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
