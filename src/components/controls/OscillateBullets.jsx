import React from "react";
import { Checkbox } from "../Checkbox";

export function OscillateBullets({ handleChange, oscillate }) {
  const onChange = (e) => {
    handleChange("oscillate", e.target.checked);
  };

  return <Checkbox label="Swing" checked={oscillate} handleChange={onChange} />;
}
