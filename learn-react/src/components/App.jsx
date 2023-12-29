import React, { useState } from "react";
import Heading from "./Header";
import FooterContent from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(newNote);
    setNotes((prevValues) => {
      return [newNote, ...prevValues];
    });
  }

  function deleteNote(noteId) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== noteId;
      });
    });
  }

  return (
    <div>
      <Heading />
      <InputArea onAdd={addNote} />
      <div className="container">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <FooterContent />
    </div>
  );
}

export default App;
