export default function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="note">
      <div>
        <h4>{note.title}</h4>
        <p>{note.date}</p>
      </div>
      <div className="menu">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
