import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import { sectionGroups } from "../data/guideContent";

function Home() {
  const [offlineReady, setOfflineReady] = useState(false);

useEffect(() => {
  const handleOfflineReady = () => {
    setOfflineReady(true);
  };

  window.addEventListener("offline-ready", handleOfflineReady);

  return () => {
    window.removeEventListener("offline-ready", handleOfflineReady);
  };
}, []);

const [activeSection, setActiveSection] = useState(null);

  if (activeSection) {
    return (
      <main className="section-page">
        <button className="back-button" onClick={() => setActiveSection(null)}>
          ← Back
        </button>

        <header className="section-header">
          <div className="section-hero-image"></div>
          <div className="section-icon">{activeSection.icon}</div>
          <h1>{activeSection.title}</h1>
          <p>{activeSection.subtitle}</p>
        </header>

        <section className="item-list">
          {activeSection.items.map((item) => (
     <article className="guide-item" key={item.title}>
      <h2>
        {item.icon && <span className="guide-item-icon">{item.icon}</span>}
        {item.title}
      </h2>
  <div className="markdown">
  <ReactMarkdown>{item.text}</ReactMarkdown>
</div>

  {item.video && (
    <video className="guide-video" controls preload="metadata">
      <source src={item.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )}
  {item.actions && (
    <div className="guide-actions">
      {item.actions.map((action) => (
        <a
          className="guide-action"
          href={action.url}
          key={action.label}
          target={action.url.startsWith("http") ? "_blank" : undefined}
          rel={action.url.startsWith("http") ? "noreferrer" : undefined}
        >
          {action.label}
        </a>
      ))}
    </div>
)}</article>
          ))}
        </section>
      </main>
    );
  }

  return (
    <main className="home-page">
      <section className="hero">
        <p className="eyebrow">
            Welcome to
        </p>
        <h1> Montbrun des Corbieres<br></br> and Our House</h1>
      </section>
<div className="offline-badge">
  {offlineReady ? "✅ Available offline" : "Preparing offline guide…"}
</div>
      <section className="intro-card">
        <h2>Make yourself at home</h2>
        <p>
          <h2>This is your guide to the house and the local area</h2>
        </p>
      </section>

{sectionGroups.map((group) => (
  <section className="home-group" key={group.id}>
    <div className="group-header">
      <div className="group-icon">{group.icon}</div>
      <div>
        <h2>{group.title}</h2>
        <p>{group.subtitle}</p>
      </div>
    </div>

    <div className="home-grid">
      {group.sections.map((section) => (
        <HomeCard
          key={section.id}
          icon={section.icon}
          title={section.title}
          subtitle={section.subtitle}
          onClick={() => setActiveSection(section)}
        />
      ))}
    </div>
  </section>
))}
    </main>
  );
}

export default Home;