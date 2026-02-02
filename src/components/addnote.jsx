import { useEffect, useState } from "react";

export default function AddNote({ goHome, editNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
    }
  }, [editNote]);

  const saveNote = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    if (editNote) {
      const updated = notes.map((n) =>
        n.id === editNote.id
          ? { ...n, title, content }
          : n
      );
      localStorage.setItem("notes", JSON.stringify(updated));
    } else {
      notes.unshift({
        id: Date.now(),
        title,
        content,
        date: new Date().toLocaleString(),
      });
      localStorage.setItem("notes", JSON.stringify(notes));
    }

    setSaved(true);
    setTimeout(goHome, 1000);
  };

  return (
    <div className="container">
      <h2>My notes</h2>

      <div className="card">
        <h4>Quick Add</h4>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Add your notes"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={saveNote}>Save</button>
      </div>

      {saved && <div className="success">Saved Successfully</div>}
    </div>
  );
}
