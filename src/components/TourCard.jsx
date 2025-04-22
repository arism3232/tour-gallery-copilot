import React from 'react';

const TourCard = ({ tour, onRemove }) => {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>{info}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </div>
  );
};

export default TourCard;