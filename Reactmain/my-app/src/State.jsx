import { useState } from "react";

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    maxWidth: 580,
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  todosHead: {
    fontSize: "6rem",
    fontWeight: "600",
    marginBottom: "2rem",
    lineHeight: "1em",
    color: "rgb(236, 236, 236)",
    textTransform: "lowercase",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 45,
    paddingLeft: 30,
    paddingRight: 60,
    borderRadius: 50,
    boxShadow: "0 1px 6px 0 rgb(0 0 0 / 38%)",
    border: 0,
  },
  plusIcon: {
    color: "darkcyan",
    fontSize: 20,
  },
  button: {
    padding: "12.5px 20px",
    lineHeight: "20px",
    margin: 0,
    background: "transparent",
    boxShadow: "none",
    border: 0,
    position: "absolute",
    right: 0,
  },
  form: {
    position: "relative",
    width: "100%",
    marginBottom: 40,
  },
  ul: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  li: {
    borderBottom: "1px solid #eaeaea",
    padding: "17px 0",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.2rem",
  },
  check: {
    marginRight: 15,
  },
  divv: {
    display: "none",
  },
  dblock: {
    display: "block",
  },
};

const PlusIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={styles.plusIcon}
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
  </svg>
);

const TrashIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 448 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: "orangered", fontSize: "16px", cursor: "pointer" }}
  >
    <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
  </svg>
);

export default function State() {
  const [todos, setTodos] = useState([
    { value: "Egg", checked: false, editing: false },
    { value: "Bread", checked: true, editing: false },
    { value: "Ham", checked: false, editing: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const newList = [
      ...todos,
      { value: input, checked: false, editing: false },
    ];
    setTodos(newList);
    setInput("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((k, i) => i !== index));
  };

  // const EditTodo = (index) => {
  //   const newList = todos.map((todo, i) => {
  //     if (i === index) {
  //       const newTodo = { ...todo };
  //       newTodo.editing = !newTodo.editing;
  //       return newTodo;
  //     }
  //     return todo;
  //   });
  //   setTodos(newList);
  // };

  const handleCheck = (index) => {
    const newList = todos.map((todo, i) => {
      if (i === index) {
        const newTodo = { ...todo };
        newTodo.checked = !newTodo.checked;
        return newTodo;
      }
      return todo;
    });
    setTodos(newList);
  };
  const handleEdit = (e, id) => {
    // console.log("ajiljinaa", id);
    console.log(e.detail);
    if (e.detail === 2) {
      const newList = todos.map((todo, index) => {
        if (index === id) {
          const newTodo = { ...todo };
          newTodo.editing = !newTodo.editing;
          return newTodo;
        }
        return todo;
      });
      setTodos(newList);
    }
  };

  const editItem = (e, id) => {
    console.log(e.key);

    if (e.key === "Enter") {
      const newList = todos.map((todo, index) => {
        if (index === id) {
          const newTodo = { ...todo };
          newTodo.editing = !newTodo.editing;
          newTodo.value = e.target.value;
          return newTodo;
        }
        return todo;
      });
      setTodos(newList);
    }
  };
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.todosHead}>todos</h1>
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault(e);
          addTodo();
        }}
      >
        <input
          style={styles.input}
          className=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" style={styles.button}>
          <PlusIcon />
        </button>
      </form>
      <ul style={styles.ul}>
        {todos.map((todo, index, value) => (
          <li style={styles.li} key={`list-item-${index}`}>
            {todo.editing ? (
              <>
                <input
                  onKeyDown={(e) => editItem(e, index)}
                  style={styles.input}
                  defaultValue={todo.value}
                />
              </>
            ) : (
              <>
                <div>
                  <input
                    type="checkbox"
                    style={styles.check}
                    checked={todo.checked}
                    onClick={() => {
                      handleCheck(index);
                    }}
                  />
                  <span
                    onClick={(e) => handleEdit(e, index)}
                    style={{
                      textDecoration: todo.checked ? "line-through" : "",
                    }}
                  >
                    {todo.value}
                  </span>
                </div>
                <div
                  onClick={() => {
                    removeTodo(index);
                  }}
                >
                  <TrashIcon />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
