export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <div className="btn-wrapper">
      {options.map(btn => (
        <button
          key={btn}
          onClick={() => onLeaveFeedback(btn)}
          className="btn"
          type="button"
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
