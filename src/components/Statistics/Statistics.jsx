export default function Statistics({ good, bad, neutral, total, percent }) {
  return (
    <div className="wrapper">
      <p>Statistics</p>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>
        {total === 0 ? (
          <span>Positive feedback: </span>
        ) : (
          <span>Positive feedback: {percent}%</span>
        )}
      </span>
    </div>
  );
}


// import { StatInfo } from './Statistics.styled';

// export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
//   return (
//     <StatInfo>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>Total: {total}</p>
//       <p>Positive feedback: {positiveFeedback}%</p>
//     </StatInfo>
//   );
// };