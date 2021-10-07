import React from "react";

export function Checkbox({ label, handleChange }) {
  return (
    <div>
      <label>{label}</label>
      <input onChange={handleChange} type="checkbox" />
    </div>
  );
}
