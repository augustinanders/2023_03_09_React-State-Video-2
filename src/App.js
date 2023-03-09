import { useState } from "react";
/* let loggedIn = false;

function setLoggedIn(newValue) {
  loggedIn = newValue;
}
 */
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(useState());

  return (
    <>
      <h1>React</h1>
      <button
        type="button"
        onClick={() => {
          setLoggedIn(!loggedIn);
        }}
      >
        {loggedIn ? "logout" : "login"}
      </button>
    </>
  );
}
