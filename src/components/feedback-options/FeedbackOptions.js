import { BtnWrapper, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => (
        <Btn key={option} onClick={() => onLeaveFeedback(option)} type="button">
          {option}
        </Btn>
      ))}
    </BtnWrapper>
  );
};
