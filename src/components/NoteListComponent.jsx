const NoteListComponent = ({ notes, onClick }) => {
  if (notes.length == 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  return (
    <>
      <div className="space-y-4">
        {notes.map((n) => (
          <div
            key={n.id}
            className="p-4 bg-white rounded-lg shadow-md border-l-4"
          >
            <h3 className="text-lg font-bold">{n.title}</h3>
            <p className="text-sm text-gray-600">
              <strong>Priority: </strong> {n.priority}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Category: </strong> {n.category}
            </p>
            <p className="mt-2">{n.description}</p>
            <button
              onClick={onClick(n.id)}
              className="mt-2 text-red-500 cursor-pointer transition hover:text-red-700"
            >
              🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteListComponent;
