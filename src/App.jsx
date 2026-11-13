import { useCallback, useState } from "react";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import { LAST_ID_KEY } from "./Constants/UIConstants";
import LoadingScreen from "./Components/LoadingScreen";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const navigate = useNavigate();
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleDocumentReady = useCallback((nextDocument) => {
    if (!nextDocument?.id) {
      throw new Error("The uploaded document did not include an ID.");
    }

    localStorage.setItem(LAST_ID_KEY, nextDocument.id);
    setUploadedDocument(nextDocument);
    navigate(`/chat/${encodeURIComponent(nextDocument.id)}`);
  }, [navigate]);

  const finishLoading = useCallback(() => setIsLoading(false), []);

  if (isLoading) {
    return <LoadingScreen onComplete={finishLoading} />;
  }

  return (
    <div className="app-shell">
      <div className="bg-aurora" aria-hidden="true">
        <span className="blob blob-violet" />
        <span className="blob blob-blue" />
      </div>
      <ScrollRestoration />
      <Header />
      <div className="route-content">
        <Outlet context={{ document: uploadedDocument, onDocumentReady: handleDocumentReady }} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
