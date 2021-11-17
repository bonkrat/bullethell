import React from "react";
import { AttributeSlider } from "../AttributeSlider";

export function SpreadWidth({ handleChange, spread }) {
  return (
    <AttributeSlider
      attributeState={spread}
      max={360}
      spread={spread}
      handleChange={handleChange}
      attribute="spreadWidth"
    />
  );
}
