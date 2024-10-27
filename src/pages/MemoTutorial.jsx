import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (Comments) => {
    if (!Comments) return null;

    let longestName = "";
    for (let i = 0; i < Comments.length; i++) {
      let currentName = Comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("This was computed");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data])

  return (
    <div>
      <div>{getLongestName}</div>
      <button
      onClick={() => {
        setToggle(!toggle)
      }}
      >
        {""}
        Toggle
      </button>
      {toggle && <span>Toggle</span>}
    </div>
  );
}
