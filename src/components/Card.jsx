// Component Styles
import "./Card.css";

export default function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  // JSX
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="Card front" />
        <img
          src="/img/cover.png"
          className="back"
          alt="Card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
