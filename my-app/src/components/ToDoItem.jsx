import React, { useState } from "react";

function ToDoItem(props) {
  //   const [classText, setClassText] = useState("");

  //   function addClass() {
  //     if (classText === "") {
  //       setClassText("task-completed");
  //     } else if (classText === "task-completed") {
  //       setClassText("");
  //     }
  //   }

  //   return (
  //     <li className={classText} onClick={addClass}>
  //       {props.text}
  //     </li>
  //   );

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
