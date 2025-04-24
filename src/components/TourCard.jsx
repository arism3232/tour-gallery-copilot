import React, { useState } from 'react';

// TourCard component to display individual tour details
const TourCard = ({ tour, onRemove }) => {
  const { id, name, info, image, price } = tour; // Destructure tour properties
  const [showMore, setShowMore] = useState(false); // State to toggle "Show More" / "Show Less"
  const [isFavorited, setIsFavorited] = useState(false); // State to track if the location is favorited

  return (
    <div className="tour-card">
      {/* Display tour image */}
      <img src={image} alt={name} />
      <div>
        {/* Display tour name and price */}
        <h2>{name}</h2>
        <h4>${price}</h4>
        {/* Display tour info with "Show More" / "Show Less" functionality */}
        <p>
          {showMore ? info : `${info.substring(0, 100)}...`}
          <button
            className="show-more-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </p>
        {/* Heart button to favorite the location */}
        <button
          className={`heart-button ${isFavorited ? 'favorited' : ''}`}
          onClick={() => setIsFavorited(!isFavorited)}
          aria-label="Favorite"
        >
          {isFavorited ? '❤️' : '🤍'}
        </button>
        {/* Button to remove the tour */}
        <button className="not-interested-button" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;