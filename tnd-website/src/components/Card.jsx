import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Card() {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of the Card */}
        <div
          key="front"
          className="card-container cursor-pointer p-8 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
          onClick={handleCardClick}
        >
          <h2 className="text-3xl font-bold text-blue-500">Techy Title</h2>
        </div>

        {/* Back of the Card */}
        <div
          key="back"
          className="card-container cursor-pointer p-8 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
          onClick={handleCardClick}
        >
          <p className="text-lg text-gray-700">
            A brief and techy description about our awesome technology. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nunc at
            felis sodales facilisis.
          </p>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Card;
