import React from 'react';
import helpDeskImage from '../assets/help-desk.png';  // Adjust the path as necessary

function CSFloat() {
  return (
    <div className="cs-float" onClick={() => window.open('https://wa.link/41izz6', '_blank')}>
      <img src={helpDeskImage} alt="Customer Service" />
      <span>Ada pertanyaan?</span>
    </div>
  );
}

export default CSFloat;
