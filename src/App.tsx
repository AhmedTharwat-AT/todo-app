import AppLayout from "./components/AppLayout";

function App() {
  return (
    <div>
      <div className="bg-desk-dark h-screen w-full bg-[var(--dark-gray-700)] bg-[length:100%_35%] bg-no-repeat ">
        <div className="container">
          <AppLayout />
        </div>
      </div>
    </div>
  );
}

export default App;
