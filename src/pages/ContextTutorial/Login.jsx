import React, { useContext,useEffect,useRef } from 'react'
import { AppContext } from './ContextTutorial'

function Login() {

  const {setUsername} = useContext(AppContext) //This Helps to access the values in the AppContext wrapper

  const nameRef = useRef("")

  useEffect(() =>{
    nameRef.current.focus()
  })
  return (
    <div>
      <input type="text" onChange={(event) => {setUsername(event.target.value)}} ref={nameRef}/>
    </div>
  )
}

export default Login