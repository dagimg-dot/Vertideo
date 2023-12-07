const SeekBar = ({ className, value, onChange, currentTime, duration }) => {
  return (
    <div className={className}>
      <div className="flex justify-between text-sm">
        {currentTime.minutes ? (
          <div>{`${currentTime.minutes}:${currentTime.seconds}`}</div>
        ) : (
          "00:00"
        )}
        <div>{`${duration.minutes}:${duration.seconds}`}</div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={onChange}
        style={{ width: "100%" }}
        step={1}
      />
    </div>
  );
};

export default SeekBar;
