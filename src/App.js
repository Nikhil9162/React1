import { useState } from "react";

export default function App(){

  const [list, setlist] = useState([]);

  const tweet = ()=> {
    setlist([...list, 1]);
  };

  return(
    <div>
      <input type="button" value="tweet" onClick={tweet}/>

      {
        list.map(() => (
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi perferendis explicabo praesentium corrupti aliquam assumenda error sapiente odit est hic ea, doloremque vero rerum, non neque quibusdam expedita obcaecati.
          </div>
        )
        )
      }
    </div>
  );
}