import { Button, Buttons } from './Feedback.styled';

export const FeedbackOption = ({ buttonClick, options }) => {
  return (
    <Buttons>
      {options.map((option, idx) => {
        return (
          <Button
            key={idx}
            type="button"
            onClick={() => {
              buttonClick(option);
            }}
          >
            {option}
          </Button>
        );
      })}
    </Buttons>
  );
};
