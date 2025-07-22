import NoteFormComponent from "./components/NoteFormComponent";

const App = () => {
  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">📝 React Notes</h2>
        <NoteFormComponent />
      </div>
    </>
  );
};

export default App;
