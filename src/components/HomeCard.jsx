function HomeCard({ icon, title, subtitle, onClick }) {
  return (
    <button className="home-card" onClick={onClick}>
      <span className="home-card-icon">{icon}</span>
      <span>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </span>
      <span className="home-card-arrow">›</span>
    </button>
  );
}

export default HomeCard;