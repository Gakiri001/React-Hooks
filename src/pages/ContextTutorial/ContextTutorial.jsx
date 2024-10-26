import React, { useState, createContext} from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null)
//context - is a collection of states which you can have access to all the states inside of the context components(Wrapping Provider)

function ContextTutorial() {

  const [username, setUsername] = useState("")
  return (
    //Values will be all the states and finctions you want to have access inside of it
    <AppContext.Provider value={{username, setUsername}}>
      <Login/>
      <User/>
    </AppContext.Provider>
  )
}

export default ContextTutorial