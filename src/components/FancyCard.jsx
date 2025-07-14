import React, { useRef } from 'react';

function FancyCard({ card, index, children }) {
  const cardRefs = useRef([]);
  const handleMouseMove = () => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty('--start', angle + 60);
  };
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove()}
      className="card card-border timeline-card rounded-3xl text-center break-inside-avoid-column"
    >
      <div className="glow" />
      {/* <div className="flex items-center justify-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div> */}
      {card && (
        <div className="mb-5">
          <p className="text-white-50 text-lg">{card?.review || card}</p>
        </div>
      )}
      {children}
    </div>
  );
}

export default FancyCard;
