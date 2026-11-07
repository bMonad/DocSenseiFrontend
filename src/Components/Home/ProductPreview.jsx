import HomeIcons from "./HomeIcons";
import { OUTLINE, KEY_POINTS } from "../../Constants/UIConstants";

export default function ProductPreview() {
  return (
    <div
      className="showcase"
      role="img"
      aria-label="Preview of DocSensei: a topic outline, the original PDF page, an AI summary and a chat about the selected topic"
    >
      <div className="art-glow" />
      <div className="sc-item sc-page" aria-hidden="true">
        <div className="glass float-b">
          <p className="mini-label">
            <HomeIcons name="file" size={14} /> Pages 6–8
          </p>
          <div className="paper">
            <i className="bar bar-title" />
            <i className="bar" style={{ width: "96%" }} />
            <i className="bar" style={{ width: "88%" }} />
            <i className="bar bar-mark" style={{ width: "72%" }} />
            <i className="bar" style={{ width: "92%" }} />
            <span className="figure" />
            <i className="bar" style={{ width: "84%" }} />
            <i className="bar" style={{ width: "58%" }} />
          </div>
        </div>
      </div>

      <div className="sc-item sc-outline" aria-hidden="true">
        <div className="glass float-a">
          <p className="mini-label">
            <HomeIcons name="listview" size={14} /> Topics
          </p>
          <ul className="mini-outline">
            {OUTLINE.map((row) => (
              <li key={row.title} style={{ "--depth": row.depth }} aria-current={row.active ? "true" : undefined}>
                <span className="label">{row.title}</span>
                <span className="page">p. {row.page}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sc-item sc-main" aria-hidden="true">
        <div className="glass float-c">
          <div className="sc-head">
            <span className="sc-tile">
              <HomeIcons name="sparkles" size={14} />
            </span>
            <div>
              <p className="sc-title">Membranes</p>
              <p className="sc-sub">Summary</p>
            </div>
          </div>

          <p className="sc-body">
            The cell membrane is a flexible barrier that controls what enters and leaves the cell. Its lipid layer lets
            small molecules pass while blocking most others.
          </p>

          <ul className="sc-points">
            {KEY_POINTS.map((point) => (
              <li key={point}>
                <HomeIcons name="check" size={14} />
                {point}
              </li>
            ))}
          </ul>

          <div className="sc-chat">
            <p className="bubble bubble-user">Why is it called selectively permeable?</p>
            <p className="bubble bubble-ai">
              Because only some substances can cross: small, non-polar molecules pass freely, while others need protein
              channels.
              <span className="source-chip">from this topic</span>
            </p>
            <div className="sc-input">
              <span>Ask about this topic</span>
              <span className="sc-send">
                <HomeIcons name="arrow" size={16} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <span className="float-chip chip-a" aria-hidden="true">
        <HomeIcons name="sparkles" size={14} /> Key points ready
      </span>
    </div>
  );
}
