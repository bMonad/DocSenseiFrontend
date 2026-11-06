import HomeIcons from "./HomeIcons";

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <HomeIcons name="sparkles" size={16} />
          Your AI study companion for PDFs
        </div>
        <h1>Make sense of the <span>pages that matter.</span></h1>
        <p className="hero-description">
          Turn dense PDFs into clear topics, thoughtful summaries, and answers grounded in what you’re reading.
        </p>

        <div className="hero-actions">
          <button className="button-primary">
            Explore your PDF
            <HomeIcons name="arrow" size={18} />
          </button>
          <a className="button-secondary" href="#how">
            See how it works
            <HomeIcons name="down" size={18} />
          </a>
        </div>
        <div className="hero-note">
          <span className="note-check">
            <HomeIcons name="check" size={14} />
          </span>
          Text-based PDFs · Up to 25 MB · 400 pages
        </div>
      </div>
    </section>
  )
}