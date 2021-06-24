import './season-display.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach.",
    image: 'sun'
  },
  winter: {
    text: "Brr it's chilly",
    image: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, image } =seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${image} icon massive icon-left`}></i>
      <h1 className="text">{text}</h1>
      <i className={`${image} icon massive icon-right`}></i>
    </div>
  );
};

export default SeasonDisplay;
