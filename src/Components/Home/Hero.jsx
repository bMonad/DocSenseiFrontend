import HomeIcons from "./HomeIcons";
import ProductPreview from "./ProductPreview";

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <HomeIcons name="sparkles" size={16} />
            Your Sensei for PDFs
          </div>
          <h1>Make sense of the <span>pages that matter.</span></h1>
          <p className="hero-description">
            Turn dense PDFs into clear topics, thoughtful summaries, and answers grounded in what you’re reading.
          </p>

          <div className="hero-actions">
            <button type="button" className="button-primary" >
              Explore your PDF
              <HomeIcons name="arrow" size={18} />
            </button>
            <a className="button-secondary" href="#how">
              See how it works
              <HomeIcons name="down" size={18} />
            </a>
          </div>
          <ul className="hero-note">
            <li>
              <span className="note-check">
                <HomeIcons name="check" size={14} />
              </span>
              Text-based PDFs · Up to 25 MB · 400 pages
            </li>
            <li>
              <span className="note-check">
                <HomeIcons name="check" size={14} />
              </span>
              Answers stay inside the topic you’re reading
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <ProductPreview />
        </div>
      </div>
    </section>
  )
}