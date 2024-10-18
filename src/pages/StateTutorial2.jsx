import React, {useState} from 'react'

function StateTutorial2() {
  const [inputValue, setInputValue] = useState("Gakiri")

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue)
  }

  return (
    <div>
      <input type="text" placeholder='Enter Something' onChange={handleChange}/>
      {inputValue}
    </div>
  )
}

export default StateTutorial2