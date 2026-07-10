import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import { sectionGroups } from "../data/guideContent";

const allSections = sectionGroups.flatMap((group) => group.sections);

function getSectionFromHash() {
  const sectionId = window.location.hash.replace("#", "");

  if (!sectionId) {
    return null;
  }

  return allSections.find((section) => section.id === sectionId) || null;
}
function Home() {
 
const [activeSection, setActiveSection] = useState(getSectionFromHash);

const activeSectionIndex = activeSection
  ? allSections.findIndex((section) => section.id === activeSection.id)
  : -1;

const nextSection =
  activeSectionIndex >= 0 && activeSectionIndex < allSections.length - 1
    ? allSections[activeSectionIndex + 1]
    : null;
const openSection = (section) => {
  setActiveSection(section);
  window.history.pushState({ sectionId: section.id }, "", `#${section.id}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

useEffect(() => {
  const handlePopState = () => {
    setActiveSection(getSectionFromHash());
    window.scrollTo({ top: 0 });
  };

  window.addEventListener("popstate", handlePopState);

  return () => {
    window.removeEventListener("popstate", handlePopState);
  };
}, []);
const goBack = () => {
  window.history.back();
};

  if (activeSection) {
    return (
      <main className="section-page">
<button
  className="back-button"
  onClick={() => {
    setActiveSection(null);
    window.history.pushState({}, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  ← Home
</button>

        <header className="section-header">
          <div
  className="section-hero-image"
  style={{
    backgroundImage: `url(${activeSection.image})`
  }}
></div>
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
  {item.image && (
  <img
    className="guide-item-image"
    src={item.image}
    alt={item.imageAlt || item.title}
    loading="lazy"
  />
)}
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
        {nextSection && (
  <section className="next-section">
    <p className="next-section-label">Up next</p>

    <button
      className="next-section-button"
      onClick={() => openSection(nextSection)}
    >
      <span className="next-section-icon">{nextSection.icon}</span>

      <span className="next-section-text">
        <strong>{nextSection.title}</strong>
        <small>{nextSection.subtitle}</small>
      </span>

      <span className="next-section-arrow">→</span>
    </button>
  </section>
)}
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
<section className="intro-card">
  <h2>Make yourself at home</h2>
  <h2>This is your guide to the house and the local area</h2>
</section>

<div className="offline-badge">
  📱 This guide works offline. On your first visit, videos may take a minute or two to download over Wi-Fi.
</div>

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
          onClick={() => openSection(section)}
        />
      ))}
    </div>
  </section>
))}
    </main>
  );
}

export default Home;