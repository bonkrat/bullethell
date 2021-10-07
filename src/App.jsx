import React from "react";
import {
  BulletAmount,
  BulletFrequency,
  ShowLine,
  Rotate,
  StartingAngle,
  OscillateBullets,
  OscillationSpeed,
  OscillationWidth,
  SpreadWidth,
  RotationSpeed,
} from "./components/controls";

export function App({ host }) {
  return (
    <div>
      <BulletAmount host={host} />
      <BulletFrequency host={host} />
      <SpreadWidth host={host} />
      <ShowLine host={host} />
      <Rotate host={host} />
      <RotationSpeed host={host} />
      <StartingAngle host={host} />
      <OscillateBullets host={host} />
      <OscillationSpeed host={host} />
      <OscillationWidth host={host} />
    </div>
  );
}
