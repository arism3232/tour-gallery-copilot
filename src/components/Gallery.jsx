import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, onRemove }) => {
  return (
    <div style={styles.gallery}>
      {tours.map((tour) => (
        <TourCard key={tour.id} name={tour.name} info={tour.info} image={tour.image} price={tour.price} onRemove={onRemove} />
      ))}
    </div>
  );
};

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    padding: '16px',
  },
};

export default Gallery;