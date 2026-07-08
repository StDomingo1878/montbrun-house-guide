import { useState } from "react";
import HomeCard from "../components/HomeCard";
import { sections } from "../data/guideContent";

function Home() {
  const [activeSection, setActiveSection] = useState(null);

  if (activeSection) {
    return (
      <main className="section-page">
        <button className="back-button" onClick={() => setActiveSection(null)}>
          ← Back
        </button>

        <header className="section-header">
          <div className="section-icon">{activeSection.icon}</div>
          <h1>{activeSection.title}</h1>
          <p>{activeSection.subtitle}</p>
        </header>

        <section className="item-list">
          {activeSection.items.map((item) => (
            <article className="guide-item" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>
      </main>
    );
  }

  return (
    <main className="home-page">
      <section className="hero">
        <p className="eyebrow">Welcome to</p>
        <h1>Montbrun House</h1>
        <p className="tagline">Slow down. Relax. Enjoy.</p>
      </section>

      <section className="intro-card">
        <h2>Make yourself at home</h2>
        <p>
          Everything you need for arriving, settling in, using the house,
          exploring the area and getting help if you need it.
        </p>
      </section>

      <section className="home-grid">
        {sections.map((section) => (
          <HomeCard
            key={section.id}
            icon={section.icon}
            title={section.title}
            subtitle={section.subtitle}
            onClick={() => setActiveSection(section)}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;