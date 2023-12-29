import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

/*
function InputArea(props) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(101);

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
     }
  }

  return (
    <div className="form">
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="content"
        value={content}
        onChange={handleChange}
        placeholder="Take a note..."
      />
      <button
        className="add-button"
        onClick={() => {
          if (title === "" && content === "") {
            console.log("write Title & Note to add note!!");
          } else {
            props.addNote(title, content, id);
            setId(id + 1);
            setTitle("");
            setContent("");
          }
        }}
        type="submit"
      >
        Add
      </button>
    </div>
  );
}

*/

function InputArea(props) {
  const [mode, setMode] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function submitNote(event) {
    if (note.title === "" && note.content === "") {
      console.log("write Title & Note to add note!!");
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
      setMode(false);
    }
    event.preventDefault();
  }

  function expandForm() {
    setMode(true);
  }

  return (
    <Zoom in={true}>
      <div className="form">
        {mode === true && (
          <zoom in={true}>
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={handleChange}
              placeholder="Title"
            />
          </zoom>
        )}
        <zoom in={true}>
          <textarea
            type="text"
            name="content"
            rows={mode === false ? 1 : 3}
            cols={35}
            value={note.content}
            onChange={handleChange}
            onClick={expandForm}
            placeholder="Take a note..."
          />
        </zoom>
        {/* <button className="add-button" onClick={submitNote} type="submit">
        <AddIcon className="add-icon" />
      </button> */}
        {mode === true && (
          <zoom in={mode}>
            <Fab
              className="add-button"
              size="medium"
              color="secondary"
              onClick={submitNote}
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          </zoom>
        )}
      </div>
    </Zoom>
  );
}
export default InputArea;
