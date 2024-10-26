import React, { useEffect, useRef } from 'react'

//UseRef -> Helps to access the DOM Element

function RefTutorial() {
  const inputRef = useRef(null);

  useEffect(() =>{
    inputRef.current.focus()
  })

  const handleonClick =() => {
    console.log("New Name: ", inputRef.current.value)
    inputRef.current.value = ""
  }
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder='Ex...' ref={inputRef}/>
      <button onClick={handleonClick}>Change Name</button>
    </div>
  )
}

export default RefTutorial