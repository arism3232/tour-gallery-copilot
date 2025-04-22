import React, { useState } from 'react';

const TourCard = ({ tour, onRemove }) => {
  const { id, name, info, image, price } = tour;
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>
          {showMore ? info : `${info.substring(0, 100)}...`}
          <button
            className="show-more-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </p>
        <button className="not-interested-button" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;