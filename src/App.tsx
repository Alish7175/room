import { useState, useEffect } from "react";
import "./App.css";
import { axiosClient } from "./ApiClient";

interface IMockDataType {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<IMockDataType[] | null>(null);

  useEffect(() => {
    // fetch("https://dummyjson.com/todos")
    //   .then(response => {
    //     if (response.ok) return response.json();
    //   })
    //   .catch(error => {throw new Error(error)})
    //   .then(response => setTodos(response?.todos))
    axiosClient
      .get("/todos", { params: {} })
      .then((response) => {
        setTodos(response?.data?.todos);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  function handleCount() {
    setCount((prevState) => prevState + 1);
  }
  return (
    <>
      <section id="counter_section">
        <p data-testid="count">{count}</p>
        <button onClick={handleCount}>+1</button>
      </section>
      <section id="todos_section">
        <ul>
          {todos &&
            todos?.map((todoElement) => {
              return <li key={todoElement.id}>{todoElement.todo}</li>;
            })}
        </ul>
      </section>
    </>
  );
}

export default App;
