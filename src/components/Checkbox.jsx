import React from "react";

export function Checkbox({ label, handleChange, checked }) {
  return (
    <div>
      <label>{label}</label>
      <input onChange={handleChange} type="checkbox" checked={checked} />
    </div>
  );
}
