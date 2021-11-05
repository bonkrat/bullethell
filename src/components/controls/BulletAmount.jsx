import React from "react";
import AttributeSlider from "../AttributeSlider";

export function BulletAmount({ handleChange, numberBullets }) {
  return (
    <AttributeSlider
      attribute={"numberBullets"}
      attributeState={numberBullets}
      handleChange={handleChange}
      max={25}
    />
  );
}
