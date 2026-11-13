import { useOutletContext } from "react-router-dom";

export default function ChatPage() {
  const { document } = useOutletContext();
  const documentName =
    document?.filename ?? document?.file_name ?? document?.name ?? "Your PDF";

  return (
    <main className="chat-page">
      <strong>{documentName}</strong> has been uploaded. This is your chat space for the document.
    </main>
  );
}
