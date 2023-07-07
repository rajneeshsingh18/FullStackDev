
//Copyed from ChatGPT unable to understant useState function
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const handleFeedback = (value) => {
    setFeedback(value);
    // Update the respective counter based on the selected feedback
    if (value === 'good') {
      setGoodCount(goodCount + 1);
    } else if (value === 'neutral') {
      setNeutralCount(neutralCount + 1);
    } else if (value === 'bad') {
      setBadCount(badCount + 1);
    }
    // You can perform any additional logic here, such as submitting the feedback to a server.
    console.log(`Feedback received: ${value}`);
  };

  return (
    <div>
      <h2>Customer Feedback</h2>
      <p>Please select an option:</p>
      <div>
        <button onClick={() => handleFeedback('good')}>Good</button>
        <button onClick={() => handleFeedback('neutral')}>Neutral</button>
        <button onClick={() => handleFeedback('bad')}>Bad</button>
      </div>
      {feedback && <p>Thank you for your feedback!</p>}
      <div>
        <h3>Feedback Summary</h3>
        <p>Good: {goodCount}</p>
        <p>Neutral: {neutralCount}</p>
        <p>Bad: {badCount}</p>
      </div>
    </div>
  );
};

export default FeedbackForm;

