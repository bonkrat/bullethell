import React from "react";

export function Slider({ label, handleChange, min = 0, max = 25, value }) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        onChange={handleChange}
        onMouseUp={handleChange}
        type="range"
        min={min}
        max={max}
        value={value}
        id="numBullets"
      />
      <span>{value}</span>
    </div>
  );
}
