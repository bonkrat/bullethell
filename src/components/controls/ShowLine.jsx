import React, { useState } from "react";
import { Checkbox } from "../Checkbox";

export function ShowLine({ handleChange, showLine }) {
  const onChange = (e) => {
    handleChange("showLine", e.target.checked);
  };

  return (
    <Checkbox label="Show Line" checked={showLine} handleChange={onChange} />
  );
}
