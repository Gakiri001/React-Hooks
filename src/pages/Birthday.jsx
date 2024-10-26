import React from 'react'

function Birthday() {
  const  sikukuu = (age) => {
    if(age === "+1"){
      console.log("Happy Birthday Miriam")
    }
    else{
      console.log("Debug your code")
    }
  }
  sikukuu("+1")
  return (
    <div>Birthday</div>
  )
}

export default Birthday