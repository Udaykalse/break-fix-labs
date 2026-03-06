import { useState } from "react";
import "./starRatingComponent.css";
function StarRatingComponent() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
     setHoverRating(0);
  };

  return (
    <div className="container">
      <h2>Rate this product</h2>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= (hoverRating || rating) ? "star filled" : "star"}
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
          >
            {/* TODO: Show filled or empty star based on rating/hoverRating */}☆
          </span>
        ))}
      </div>
      <p className="rating-text">Rating: {rating}/5</p>
    </div>
  );
}

export default StarRatingComponent;
