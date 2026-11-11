import HomeIcons from "./HomeIcons";

const BENEFITS = [
  {
    title: "Find what matters faster",
    text: "Jump straight to the topic you need instead of scrolling through hundreds of pages.",
  },
  {
    title: "Trust what you read",
    text: "Every summary sits beside the pages it came from, so checking the source takes one glance.",
  },
  {
    title: "Study actively",
    text: "Ask for a simpler explanation, the key terms, or a quick quiz on whatever you’re reading.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section" data-reveal id="why" aria-labelledby="why-title">
      <div className="wrap why-grid">
        <div className="why-copy">
          <p className="kicker" data-reveal>
            Why DocSensei
          </p>
          <h2 id="why-title" data-reveal style={{ "--d": "60ms" }}>
            Stop scrolling. <span className="why-highlight">Start understanding.</span>
          </h2>
          <p className="lead-sm" data-reveal style={{ "--d": "120ms" }}>
            Most AI tools answer from a whole document and hope for the best. DocSensei keeps every answer anchored to
            the section in front of you.
          </p>

          <ul className="benefit-list">
            {BENEFITS.map((benefit, i) => (
              <li key={benefit.title} data-reveal style={{ "--d": `${180 + i * 90}ms` }}>
                <span className="check">
                  <HomeIcons name="check" size={16} strokeWidth={2.4} />
                </span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="why-demo glass" data-reveal style={{ "--d": "140ms" }}>
          <figcaption className="demo-head">
            <span className="sc-tile">
              <HomeIcons name="sparkles" size={16} />
            </span>
            Chat · Methods
          </figcaption>
          <p className="bubble bubble-user">What sample size did the authors use?</p>
          <p className="bubble bubble-ai">
            They recruited 240 participants across three sites, as described in the second paragraph of this section.
            <span className="source-chip">from this topic</span>
          </p>
          <p className="bubble bubble-user">And what did they conclude about it?</p>
          <p className="bubble bubble-ai">
            I couldn’t find the conclusions in this section. They’re likely under “Discussion”, so try that topic in the
            sidebar.
          </p>
        </figure>
      </div>
    </section>
  );
}
