import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function User() {
  const { username } = useContext(AppContext); //This Helps to access the values in the AppContext wrapper

  return <div>User: {username}</div>;
}

export default User;
