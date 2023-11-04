import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackAdd = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    console.log(this.state);
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback keys={keys} feedbackAdd={this.feedbackAdd} />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </>
    );
  }
}
