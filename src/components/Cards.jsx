import React from 'react';
import './Cards.css';

const Cards = ({ title, imageUrl, description, buttonText, buttonLink }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={buttonLink} className="card-button">{buttonText}</a>
      </div>
    </div>
  );
};

export default Cards;
