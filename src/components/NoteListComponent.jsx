import NoteComponent from "./NoteComponent";

const NoteListComponent = ({ notes, onClick }) => {
  if (notes.length == 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  return (
    <>
      <div className="space-y-4">
        {notes.map((n) => (
          <NoteComponent key={n.id} note={n} onClick={onClick} />
        ))}
      </div>
    </>
  );
};

export default NoteListComponent;
