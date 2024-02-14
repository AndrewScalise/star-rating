import {useState} from "react";
import StarRating from "./starRating";

function App() {
  // Create a star rating component that takes in a rating and displays the number of stars that represents the rating. The component should also take in a color prop that changes the color of the stars.
  const [rating, setRating] = useState(3.5);
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(24);
  const [spacing, setSpacing] = useState(4);
  const [numberOfStars, setNumberOfStars] = useState(5);

  
  return (
    <StarRating
      rating={rating}
      color={color}
      size={size}
      spacing={spacing}
      numberOfStars={numberOfStars}
    />
  );
}

export default App;
