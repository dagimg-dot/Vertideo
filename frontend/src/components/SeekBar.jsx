const SeekBar = ({ className, value, onChange, currentTime, duration }) => {
  return (
    <div className={className}>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={onChange}
        style={{ width: "100%" }}
        step={1}
      />
      <div className="flex justify-between">
        {currentTime.minutes ? (
          <div>{`${currentTime.minutes}:${currentTime.seconds}`}</div>
        ) : (
          "00:00"
        )}
        <div>{`${duration.minutes}:${duration.seconds}`}</div>
      </div>
    </div>
  );
};

export default SeekBar;
