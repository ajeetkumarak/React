import React from "react";
import ReactDOM from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";

function Heading() {
  return (
    <header>
      <h1 className="heading">
        <span>
          <ChecklistIcon />
        </span>
        Keeper
      </h1>
    </header>
  );
}

export default Heading;
