import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";
/*
function App() {
  const [count, setCount] = useState(1);
  // console.log(count);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
} */
/*
function App() {
  setInterval(updateTime, 1111);

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1 className="clock">{time}</h1>
      <button className="time" onClick={updateTime}>
        Get Time
      </button>
    </div>
  );
}
*/
/*
function App() {
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  console.log(fullName);
  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    console.log(newValue, inputName);

    setFullName((prevValue) => {
      console.log(prevValue);
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
        };
      }
    });
  }

  function handleClick(event) {
    setHeadingText(fullName.fName + " " + fullName.lName);
    event.preventDefault();
  }
  function handleMouseOver() {
    // console.log("Mouse over.");
    setMouseOver(true);
  }
  function handleMouseOut() {
    // console.log("Mouse Out.");
    setMouseOver(false);
  }
  function updateFName(event) {
    console.log(event.target.value);
    setFName(event.target.value);
  }
  function updateLName(event) {
    console.log(event.target.value);
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        {/* <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        /> */ /*       }       
        {/* <input
          type="text"
          onChange={updateFName}
          placeholder="First Name"
          value={fName}
        />
        <input
          type="text"
          onChange={updateLName}
          placeholder="Last Name"
          value={lName}
        /> */ /*           }
        <input
          type="text"
          onChange={handleChange}
          placeholder="First Name"
          name="fName"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Last Name"
          name="lName"
        />

        <button
          style={{ backgroundColor: isMouseOver ? "black" : "green" }}
          className="submit"
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          // onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
*/
/*
function App() {
  const [headingText, setHeadingText] = useState("");
  const [emailText, setEmailText] = useState("");

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleClick(event) {
    setHeadingText(contact.fName + " " + contact.lName);
    setEmailText(contact.email);
    event.preventDefault();
  }
  function handleChange(event) {
    const { name, value } = event.target;

    console.log(name, value);

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <p>{emailText}</p>
      <form onSubmit={handleClick}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="First Name"
          name="fName"
          value={contact.fName}
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Last Name"
          name="lName"
          value={contact.lName}
        />
        <input
          type="email"
          onChange={handleChange}
          placeholder="Your E-mail"
          name="email"
          value={contact.email}
        />
        <button
          // style={{ backgroundColor: isMouseOver ? "black" : "green" }}
          className="submit"
          type="submit"
          // onMouseOver={handleMouseOver}
          // onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
*/

// for To-Do List App

/*
const allTasks = [];

function CreateList(props) {
  return <li>{props.task}</li>;
}

function App() {
  const [inputText, setInputText] = useState("");
  const [id, setId] = useState(1);

  function addItems() {
    if (inputText === "") {
      console.log("Enter tasks..., to add");
    } else {
      allTasks.push({ key: id, name: inputText });
      setInputText("");
      setId(id + 1);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText(value);
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        name="task"
        value={inputText}
        onChange={handleChange}
        placeholder="Task to do..."
      />
      <button onClick={addItems}>Add</button>
      <div className="todo-list">
        <ul>
          {allTasks.map((task) => (
            <CreateList key={task.key} task={task.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}
*/

// for To-Do List App

function App() {
  const [items, setItems] = useState([]);

  function addItems(inputText) {
    if (inputText === "") {
      console.log("Enter tasks..., to add");
    } else {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
  }

  function deleteItem(id) {
    console.log(id);
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <InputArea onAdd={addItems} />
      <div className="todo-list">
        <ul>
          {items.map((item, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={item}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// in real world, we do not use index of item of array for key
// instead use a package known as 'uuid'
export default App;
