import React from 'react';

const TourCard = ({ tour, onRemove }) => {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card" style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{name}</h2>
        <h4 style={styles.price}>${price}</h4>
        <p style={styles.info}>{info}</p>
        <button style={styles.button} onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5rem',
    margin: '8px 0',
  },
  price: {
    fontSize: '1.25rem',
    color: '#4caf50',
    margin: '8px 0',
  },
  info: {
    fontSize: '1rem',
    color: '#555',
    margin: '8px 0',
  },
  button: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TourCard;