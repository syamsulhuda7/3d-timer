/* eslint-disable react/prop-types */
export const FlipCard = ({
  value,
  nextValue,
  isFlipping,
  typeData,
  timeLeft,
  position,
}) => {
  const shouldFlip = () => {
    const thresholds = {
      seconds: position === "back" ? 1 : 10,
      minutes: position === "back" ? 60 : 600,
      hours: position === "back" ? 3600 : 36000,
    };
    return isFlipping && timeLeft % thresholds[typeData] === 0;
  };

  return (
    <div className="parent-card">
      <div className="top-card">{shouldFlip() ? nextValue : value}</div>
      <div className="bottom-card">{value}</div>
      <div className={`${shouldFlip() ? "top-flip" : "hidden"}`}>
        {shouldFlip() ? value : nextValue}
      </div>
      <div className={`${shouldFlip() ? "bottom-flip" : "hidden"}`}>
        {shouldFlip() ? nextValue : value}
      </div>
    </div>
  );
};
