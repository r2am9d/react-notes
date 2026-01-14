import { useState, useEffect } from "react";
import NoteFormComponent from "./components/NoteFormComponent";
import NoteListComponent from "./components/NoteListComponent";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const notes = localStorage.getItem("notes");
    return JSON.parse(notes) || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const removeNote = (id) => (e) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (!confirm) return;

    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">📝 React Notes</h2>
        <NoteFormComponent notes={notes} setNotes={setNotes} />
        <NoteListComponent notes={notes} onClick={removeNote} />
      </div>
    </>
  );
};

export default App;
