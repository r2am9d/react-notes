const NoteComponent = ({ note, onClick }) => {
  const priorityBorder = {
    Low: "border-l-green-500",
    Medium: "border-l-yellow-500",
    High: "border-l-red-500",
  };

  return (
    <>
      <div
        key={note.id}
        className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${
          priorityBorder[note.priority] || "border-l-gray-300"
        }`}
      >
        <h3 className="text-lg font-bold">{note.title}</h3>
        <p className="text-sm text-gray-600">
          <strong>Priority: </strong> {note.priority}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Category: </strong> {note.category}
        </p>
        <p className="mt-2">{note.description}</p>
        <button
          onClick={onClick(note.id)}
          className="mt-2 text-red-500 cursor-pointer transition hover:text-red-700"
        >
          🗑️ Delete
        </button>
      </div>
    </>
  );
};

export default NoteComponent;
