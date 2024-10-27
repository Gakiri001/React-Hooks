import React, { useRef } from "react";
import Button from "./ButtonChild";

function ImperativeHandle() {
  const Buttonref = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          Buttonref.current.alterToggle();
        }}
      >
        Button From Parent
      </button>{" "}
      <br /> <br />
      <Button ref={Buttonref} />
    </div>
  );
}

export default ImperativeHandle;
