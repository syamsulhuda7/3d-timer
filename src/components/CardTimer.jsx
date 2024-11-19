/* eslint-disable react/prop-types */
export const CardTimer = ({
  timeValue,
  typeData,
  hours0 = "x",
  hours1 = "x",
  minutes = "x",
  minutes0 = "x",
  minutes1 = "x",
  secs = "x",
  secs0 = "x",
  secs1 = "x",
  isFlipping,
}) => {
  return (
    <div className="flex gap-1">
      <div className="parent-card">
        <div className="top-card">{`${
          isFlipping &&
          hours1 !== "x" &&
          hours1 === timeValue.hours1 &&
          minutes !== "x" &&
          minutes === timeValue.minutes &&
          minutes1 !== "x" &&
          minutes1 === timeValue.minutes1 &&
          secs !== "x" &&
          secs === timeValue.secs &&
          secs1 !== "x" &&
          secs1 === timeValue.secs1
            ? hours0 - 1 === -1
              ? typeData === "hours"
                ? 9
                : 5
              : hours0 - 1
            : hours0
        }`}</div>
        <div className="bottom-card">{hours0}</div>
        <div
          className={`${
            isFlipping &&
            hours1 !== "x" &&
            hours1 === timeValue.hours1 &&
            minutes !== "x" &&
            minutes === timeValue.minutes &&
            minutes1 !== "x" &&
            minutes1 === timeValue.minutes1 &&
            secs !== "x" &&
            secs === timeValue.secs &&
            secs1 !== "x" &&
            secs1 === timeValue.secs1
              ? "top-flip"
              : "hidden"
          }`}
        >
          {hours0 === 10 ? 0 : hours0}
        </div>
        <div
          className={`${
            isFlipping &&
            hours1 !== "x" &&
            hours1 === timeValue.hours1 &&
            minutes !== "x" &&
            minutes === timeValue.minutes &&
            minutes1 !== "x" &&
            minutes1 === timeValue.minutes1 &&
            secs !== "x" &&
            secs === timeValue.secs &&
            secs1 !== "x" &&
            secs1 === timeValue.secs1
              ? "bottom-flip"
              : "hidden"
          }`}
        >
          {hours0 - 1 === -1 ? (typeData === "hours" ? 9 : 5) : hours0 - 1}
        </div>
      </div>
      {/*  */}
      <div className="parent-card">
        <div className="top-card">{`${
          isFlipping &&
          minutes !== "x" &&
          minutes === timeValue.minutes &&
          secs !== "x" &&
          secs === timeValue.secs
            ? hours1 - 1 === -1
              ? 9
              : hours1 - 1
            : hours1
        }`}</div>
        <div className="bottom-card">{hours1}</div>
        <div
          className={`${
            isFlipping &&
            minutes !== "x" &&
            minutes === timeValue.minutes &&
            secs !== "x" &&
            secs === timeValue.secs
              ? "top-flip"
              : "hidden"
          }`}
        >
          {hours1 === 10 ? 0 : hours1}
        </div>
        <div
          className={`${
            isFlipping &&
            minutes !== "x" &&
            minutes === timeValue.minutes &&
            secs !== "x" &&
            secs === timeValue.secs
              ? "bottom-flip"
              : "hidden"
          }`}
        >
          {hours1 - 1 === -1 ? 9 : hours1 - 1}
        </div>
      </div>
    </div>
  );
};
