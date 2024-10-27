import React, { useEffect, useState } from "react";
import axios from "axios";

//UseEffect is a function that is called when a page re-renders.

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API was called");
        console.log(response.data);
      });
  }, []); //Array of all the states you want to listen to.

  return (
    <>
      <h1>{data}</h1>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </>
  );
}

export default EffectTutorial;
