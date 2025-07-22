import { useState } from "react";
import NoteFormComponent from "./components/NoteFormComponent";
import NoteListComponent from "./components/NoteListComponent";

const App = () => {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">📝 React Notes</h2>
        <NoteFormComponent notes={notes} setNotes={setNotes} />
        <NoteListComponent notes={notes} />
      </div>
    </>
  );
};

export default App;
