import React, {  useState } from 'react';


const RatingStars = ({ initialRating, onRatingChange,id }) => {
  const [rating, setRating] = useState(initialRating );
  const ratefun=async(clickedRating)=>{
    await console.log(clickedRating)
    const response = await fetch(`http://localhost:5000/api/folio/rate/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ "rate":clickedRating })
  });
    // console.log(response)
  }
  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
    ratefun(clickedRating);
    if (onRatingChange) {
      onRatingChange(clickedRating);
     
    }
    
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => {handleStarClick(star);
            }}
          style={{
            cursor: 'pointer',
            color: star <= rating ? 'gold' : 'gray',
          }}
        >
          &#9733; {/* Unicode star character */}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
