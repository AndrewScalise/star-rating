import { useState } from "react";

function StarRating({ rating, color, size, spacing, numberOfStars }) {
  const [isFullStar, setIsFullStar] = useState(false);
  const stars = [];
  const handleClick = () => {
    setIsFullStar((prevIsFullStar) => !prevIsFullStar);
  };

  for (let i = 0; i < numberOfStars; i++) {
    let star = isFullStar ? "★" : "☆";
    stars.push(
      <span
        key={i}
        style={{
          color,
          fontSize: `${size}px`,
          marginRight: `${spacing}px`,
        }}
        onClick={handleClick}
      >
        {star}
      </span>
    );
  }
  return stars;
}

export default StarRating;
