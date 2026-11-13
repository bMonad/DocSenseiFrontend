import { useCallback, useRef, useState } from "react";
import { uploadPdf } from "../api";

export function useUploader(onReady) {
  const inputRef = useRef(null);
  const [state, setState] = useState({ busy: false, error: "" });
  const [dragging, setDragging] = useState(false);

  const handleFile = useCallback(
    async (file) => {
      if (!file) return;
      if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
        setState({ busy: false, error: "Choose a PDF file." });
        return;
      }

      setState({ busy: true, error: "" });

      try {
        onReady(await uploadPdf(file));
      } catch (err) {
        setState({
          busy: false,
          error: err instanceof Error ? err.message : "The PDF could not be uploaded.",
        });
      }
    },
    [onReady],
  );

  const hasFiles = (e) => Array.from(e.dataTransfer?.types ?? []).includes("Files");

  return {
    busy: state.busy,
    error: state.error,
    dragging,
    dismissError: () => setState((s) => ({ ...s, error: "" })),
    pick: () => inputRef.current?.click(),
    inputProps: {
      ref: inputRef,
      type: "file",
      accept: "application/pdf, .pdf",
      hidden: true,
      onChange: (e) => {
        handleFile(e.target.files[0]);
        e.target.value = "";
      }
    },
    dropProps: {
      onDragOver: (e) => {
        if (!hasFiles(e)) return;
        e.preventDefault();
        setDragging(true);
      },
      onDragLeave: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setDragging(false);
      },
      onDrop: (e) => {
        if (!hasFiles(e)) return;
        e.preventDefault();
        setDragging(false);
        handleFile(e.dataTransfer.files[0]);
      }
    }
  }
}