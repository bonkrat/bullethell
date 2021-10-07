import React, { useEffect, useState } from "react";
import { Slider } from "../Slider";

export function BulletAmount({ host }) {
  const [numBullets, setNumBullets] = useState(1);

  const handleChange = (e) => {
    setNumBullets(e.target.value);
    host.numberBullets = numBullets;
  };

  useEffect(() => {
    host.numberBullets = numBullets;
  }, []);

  return (
    <Slider
      label="Number of Bullets"
      handleChange={handleChange}
      value={numBullets}
      min={0}
      max={25}
    />
  );
}
