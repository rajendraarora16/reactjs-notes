import React from "react";

const App = () => {
  const [todoValue, setTodoValue] = React.useState("");
  const [toDo, setToDo] = React.useState([
    "todo 1",
    "todo 2",
    "todo 3",
    "todo 3",
  ]);

  const handleDelete = (itemIndex) => {
    const filteredArr = toDo?.filter((_item, index) => index !== itemIndex);
    setToDo(filteredArr);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault(); // prevent to refresh the page

    if (todoValue === "") return;

    setToDo((prevState) => [...prevState, todoValue]);
    setTodoValue("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>React Todo simple</h1>

        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="toDoApp"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <input type="submit" />
        </form>

        <ul>
          {toDo?.map((item, index) => {
            return (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
