import React, {useState} from 'react'

function StateTutorial() {
  const [counter, setCounter] = useState(100);
  //const[Variable, setterFunction ] = initialValue


  const increment = () => {
    setCounter(counter+1) // Use the setter function to update the state
    console.log(setCounter)
  }

  return (
    <div>{counter} <button onClick={increment}>increment</button> </div>
  )
}

export default StateTutorial