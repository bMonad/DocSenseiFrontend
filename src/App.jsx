import { useCallback, useState } from "react"
import Home from "./Pages/Home"
import { LAST_ID_KEY } from "./Constants/UIConstants";
import LoadingScreen from "./Components/LoadingScreen";

function App() {

  const [doc, setDoc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function open(next) {
    localStorage.setItem(LAST_ID_KEY, next.id);
    setDoc(next);
  }

  const finishLoading = useCallback(() => setIsLoading(false), []);

  if (isLoading) return <LoadingScreen onComplete={finishLoading} />
  if (!doc) return <Home onReady={open} />
}

export default App
