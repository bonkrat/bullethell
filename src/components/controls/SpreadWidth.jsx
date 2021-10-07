import React, { useEffect, useState } from "react";
import { Slider } from "../Slider";

export function SpreadWidth({ host }) {
  const [width, setWidth] = useState(60);

  const handleChange = (e) => {
    setWidth(e.target.value);
    host.spreadWidth = width;
  };

  useEffect(() => {
    host.spreadWidth = width;
  }, []);

  return (
    <Slider
      label="Spread Width"
      handleChange={handleChange}
      value={width}
      min={0}
      max={360}
    />
  );
}
