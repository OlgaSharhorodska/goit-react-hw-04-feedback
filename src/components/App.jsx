import React, {useState} from 'react';
import Statistics from './Statistics/Statistics';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onClickButtons(e) {
    if (e === 'Good') {
      setGood(e => e + 1);
    }
    if (e === 'Neutral') {
      setNeutral(e => e + 1);
    }
    if (e === 'Bad') {
      setBad(e => e + 1);
    }
  }

  const total = good + bad + neutral;
  const percent = Math.floor((good / total) * 100);

  return (
    <div className="container">
      <div className="wrapper">
        <p>Please leave feedback</p>
        <Feedback onClickButtons={onClickButtons} />
        {total !== 0 ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            percent={percent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </div>
  );
}

