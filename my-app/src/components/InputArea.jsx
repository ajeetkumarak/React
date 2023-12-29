import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText(value);
  }

  return (
    <div className="form">
      <input
        type="text"
        name="task"
        value={inputText}
        onChange={handleChange}
        placeholder="Task to do..."
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default InputArea;
