import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note--box">
      <h1 className="note--title">{props.title}</h1>
      <p className="note--content">{props.content}</p>
      <button className="delete--button" type="submit" onClick={handleClick}>
        <DeleteIcon className="delete--icon" />
      </button>
    </div>
  );
}

/* Content notes provide additional information on persons, places, or
          ideas mentioned in the text. Content notes provide definitions of
          unusual or foreign terms. */

export default Note;
