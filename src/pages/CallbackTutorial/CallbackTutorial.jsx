import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallbackTutorial() {
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState("Yoh, pls sub to the channel")

  const returnComment = useCallback((name) => {
    return data + name
  }, [data]) //An Array of all the states you want to be listened to

  return(
    <div>
      < Child returnComment={returnComment}/>

      <button onClick={() => {
        setToggle(!toggle)
      }}>
        Toggle
      </button>
      {toggle && <p>Toggle</p>} {/*conditional rendering*/}
    </div>
  )
}