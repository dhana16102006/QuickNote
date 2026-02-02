import { useState } from "react";
import Home from "./components/Home";
import AddNote from "./components/AddNote";

export default function App() {
  const [page, setPage] = useState("home");
  const [editNote, setEditNote] = useState(null);

  return (
    <>
    
      {page === "home" && (
        <Home
          goAdd={() => setPage("add")}
          onEdit={(note) => {
            setEditNote(note);
            setPage("add");
          }}
        />
      )}

      {page === "add" && (
        <AddNote
          editNote={editNote}
          goHome={() => {
            setEditNote(null);
            setPage("home");
          }}
        />
      )}
    </>
  );
}
