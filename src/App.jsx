import { useState } from "react"
import Home from "./Pages/Home"
import { LAST_ID_KEY } from "./Constants/UIConstants";

function App() {

  const [doc, setDoc] = useState(null);

  function open(next) {
    localStorage.setItem(LAST_ID_KEY, next.id);
    setDoc(next);
  }


  if (!doc) return <Home onReady={open} />
}

export default App
