import React, { useEffect, useLayoutEffect, useRef } from "react";

//UseEffect -> Is called after everything is rendered to the page and shown to the user.
//UseLayouteffect -> Is called before the staff is printed to the user.

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value="Julius"
        style={{ width: 400, height: 100 }}
      />
    </div>
  );
}

export default LayoutEffectTutorial;
