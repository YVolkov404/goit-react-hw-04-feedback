import { useState } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedback-options/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';
import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';

// ===============================================================

export const App = () => {
  const [options, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = options;

  const onLeaveFeedback = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / total);

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />

        {/* --------------------------------------------------------------- */}
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        )}
        {total === 0 && <Notification message="There is no feedback" />}
      </Section>

      <GlobalStyle />
    </>
  );
};
