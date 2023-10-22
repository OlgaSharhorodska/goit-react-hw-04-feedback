import React from 'react';
import Statistics from './Statistics/Statistics';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  //  onClickButtons(evt) {
  //   if (evt === 'Good') {
  //     setGood(evt => evt + 1);
  //   }
  //   if (evt === 'Neutral') {
  //     setNeutral(evt => evt + 1);
  //   }
  //   if (evt === 'Bad') {
  //     setBad(evt => evt + 1);
  //   }
  // }
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = total => {
    return Math.floor((this.state.good / total) * 100);
  };
  onLeaveFeedback = btnName => {
    switch (btnName) {
      case 'good':
        this.setState(prev => ({ good: prev.good + 1 }));
        break;
      case 'bad':
        this.setState(prev => ({ bad: prev.bad + 1 }));
        break;
      case 'neutral':
        this.setState(prev => ({ neutral: prev.neutral + 1 }));
        break;
      default:
        break;
    }
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage(total);
    return (
      <div className="container">
        <div className="wrapper">
          <p>Please leave feedback</p>
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
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
}
