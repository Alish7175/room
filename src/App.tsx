import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount]  = useState<number>(0);
  function handleCount(){
    setCount(prevState => prevState +1);
  }
  return (
    <>
      <p data-testid="count">{count}</p>
      <button onClick={handleCount}></button>
    </>
  )
}

export default App;
