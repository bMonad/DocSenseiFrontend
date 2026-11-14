import { useOutletContext } from "react-router-dom";
import "../styles/ChatPage.css";

export default function ChatPage() {
  const { document } = useOutletContext();
  const documentName =
    document?.title ?? "Your PDF";

  return (
    <main className="chat-page">
      <span><strong>{documentName}</strong> has been uploaded. This is your chat space for the document.</span>

      <p>Please note that the chat functionality is still under development. You will be able to ask questions and receive answers based on the content of your uploaded PDF in the near future.</p>
    </main>
  );
}
