import React, { useEffect, useState } from "react";
import { Checkbox } from "../Checkbox";

export function OscillateBullets({ host }) {
  const [oscillate, setOscillate] = useState(0);

  const handleChange = (e) => {
    setOscillate(e.target.checked);
    host.oscillate = e.target.checked;
  };

  useEffect(() => {
    host.oscillate = oscillate;
  }, []);

  return (
    <Checkbox
      label="Oscillate Bullets"
      checked={oscillate}
      handleChange={handleChange}
    />
  );
}
