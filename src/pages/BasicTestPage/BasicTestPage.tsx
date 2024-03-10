import { useEffect, useState} from "react";
// import { axiosClient } from "../../ApiClient";
import useFetchList from "../../hooks/useFetchList";
import style from "./BasicTestPage.module.css"

interface IMockDataType {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export default function BasicTestPage() {
  const [count, setCount] = useState<number>(0);
  const todos = useFetchList("/todos", "todos");

  function handleCount() {
    setCount((prevState) => prevState + 1);
  }
  return (
    <>
      <section id="counter_section">
        <p data-testid="count" className="hello">{count}</p>
        <h1 className={`${style.hello}`}>Hello World</h1>
        <button onClick={handleCount}>+1</button>
      </section>
      <section id="todos_section">
        <ul>
          {todos && todos.length && todos?.map((todoElement:IMockDataType) => {
              return <li key={todoElement.id}>{todoElement.todo}</li>;
            })}
          {todos && !todos.length && <li key="1">No Data Found!!</li>}  
        </ul>
      </section>
    </>
  );
}
