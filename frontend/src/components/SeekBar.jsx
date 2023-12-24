const SeekBar = ({ className, value, onChange, currentTime, duration }) => {
  const currTime = currentTime.minutes
    ? `${currentTime.minutes}:${currentTime.seconds}`
    : "00:00";
  const dur = duration.minutes
    ? `${duration.minutes}:${duration.seconds}`
    : "00:00";

  return (
    <div className={className}>
      <div className="flex justify-between text-sm px-2">
        <span>{currTime}</span>
        <span>{dur}</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value || 0}
        onChange={onChange}
        style={{ width: "100%" }}
        step={1}
      />
    </div>
  );
};

export default SeekBar;
