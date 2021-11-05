import React from "react";
import AttributeSlider from "../AttributeSlider";

export function BulletFrequency({ handleChange, fireFrequency, disabled }) {
  return (
    <AttributeSlider
      attribute="fireFrequency"
      attributeState={fireFrequency}
      handleChange={handleChange}
      max={50}
      disabled={disabled}
    />
  );
}
