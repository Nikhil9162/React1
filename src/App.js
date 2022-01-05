import { useState } from "react";

export default function App(){

  let [counter, setcounter] = useState(100);

  const increment = () => setcounter(counter+1);
  const decrement = () => setcounter(counter-1);

  return (
    <div>
      <div>{counter}</div>
      <input type="button" value="Incr" onClick={increment} />
      <input type="button" value="Decr" onClick={decrement}/>
    </div>
  );
}