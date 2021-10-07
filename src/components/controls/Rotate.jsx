import React from "react";
import { Checkbox } from "../Checkbox";

export function Rotate({ handleChange, rotate }) {
  const onChange = (e) => {
    handleChange("rotate", e.target.checked);
  };

  return <Checkbox label="Rotate" checked={rotate} handleChange={onChange} />;
}
