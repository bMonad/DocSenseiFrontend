import { FEATURES } from "../../Constants/UIConstants";
import HomeIcons from "./HomeIcons";

export default function Features() {
  return (
    <section id="features" className="features-section wrap" data-reveal>
      <div className="section-heading" data-reveal>
        <span className="section-kicker">LESS SCROLLING, MORE UNDERSTANDING</span>
        <h2>A calmer way to read long documents.</h2>
        <p>One thoughtful workspace for turning long documents into learning that sticks.</p>
      </div>
      <div className="feature-grid" data-reveal>
        {FEATURES.map((feature, idx) => (
          <article className="feature-card" data-reveal key={`${feature.icon}-${idx}`}>
            <span className="feature-icon">
              <HomeIcons name={feature.icon} />
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}