import { useEffect, useState } from "react";
import NoteCard from "./notecard";

export default function Home({ goAdd, onEdit }) {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes")) || []);
  }, []);

  const deleteNote = (id) => {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  };

  const filtered = notes.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h2>My notes</h2>
        <span>⚙️</span>
      </header>

      <div className="search-bar">
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={() => onEdit(note)}
          onDelete={() => deleteNote(note.id)}
        />
      ))}

      <button className="add-btn" onClick={goAdd}>
        + Add Note
      </button>
    </div>
  );
}
