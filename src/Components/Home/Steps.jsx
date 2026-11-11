export default function LandingSteps() {
  return (
    <section id="how" className="steps-section wrap" data-reveal>
      <div className="steps-copy" data-reveal>
        <span className="section-kicker">A LITTLE LESS OVERWHELM</span>
        <h2>From PDF to <span>“I get it.”</span></h2>
        <p>No complicated setup. Just bring what you’re reading and let the ideas come into focus.</p>
      </div>
      <ol className="steps-list">
        <li data-reveal><span className="step-number">01</span><div><h3>Bring your PDF</h3><p>Upload a text-based PDF to get started.</p></div></li>
        <li data-reveal><span className="step-number">02</span><div><h3>Find your place</h3><p>Explore the topic outline and open the section you need.</p></div></li>
        <li data-reveal><span className="step-number">03</span><div><h3>Learn at your pace</h3><p>Read a summary, revisit the page, or ask a question.</p></div></li>
      </ol>
    </section>
  );
}
