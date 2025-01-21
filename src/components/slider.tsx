import React from "react";

type SliderProps = {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

const Slider: React.FC<SliderProps> = ({ min, max, value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "300px", margin: "10px 0" }}
      />
      <div>Value: {value}</div>
    </div>
  );
};

export default Slider
