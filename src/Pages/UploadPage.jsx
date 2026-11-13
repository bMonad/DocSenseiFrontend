import HomeIcons from "../Components/Home/HomeIcons";
import { useUploader } from "../Utils/useUploader";
import { useLandingReveal } from "../Utils/useLandingReveal";
import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/UploadScreen.css";

const UploadPage = () => {
  const { onDocumentReady } = useOutletContext();
  const uploader = useUploader(onDocumentReady);
  const onUpload = uploader.pick();
  const rootRef = useRef(null);
  useLandingReveal(rootRef);

  return (
    <main className="upload-page" ref={rootRef}>
      <section className="section section-cta" id="start" aria-labelledby="cta-title">
        <div className="wrap">
          <div className="cta-panel" data-reveal>
            <h2 id="cta-title" className="section-kicker cta-title">
              YOUR STUDY SPACE STARTS HERE
            </h2>
            <p>Drop your document here, or browse files from your device.</p>

            <input {...uploader.inputProps} />
            <button
              type="button"
              className={`drop${uploader.dragging ? " drop--dragging" : ""}`}
              onClick={onUpload}
              aria-describedby="drop-hint"
              disabled={uploader.busy}
              {...uploader.dropProps}
            >
              <span className="drop-icon">
                <HomeIcons name="upload" size={26} />
              </span>
              <span className="drop-title">
                {uploader.busy ? "Uploading your PDF..." : "Start with a PDF"}
              </span>
              <span className="upload-limits">
                PDF files only <i /> Up to 25 MB <i /> 400 pages max
              </span>
            </button>
            <p id="drop-hint" className="upload-hint">
              Choose a file or drag it into the upload area.
            </p>
            {uploader.error && (
              <p className="upload-error" role="alert">{uploader.error}</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default UploadPage