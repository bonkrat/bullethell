import React from "react";
import {
  BulletAmount,
  BulletFrequency,
  OscillateBullets,
  OscillationSpeed,
  OscillationWidth,
  Rotate,
  RotationSpeed,
  ShowLine,
  SpreadWidth,
  StartingAngle,
  ControlGroup,
  Controls
} from "./components";
import { useHost } from "./hooks";

export function App({ hostInstance }) {
  const { host, updateHost } = useHost(hostInstance);
  const {
    numberBullets,
    fireFrequency,
    spreadWidth,
    showLine,
    rotate,
    speed,
    baseAngle,
    oscillate,
    oscillationSpeed,
    width,
  } = host;

  return (
    <Controls>
      <ControlGroup label="Bullets">
        <BulletAmount numberBullets={numberBullets} handleChange={updateHost} />
        <BulletFrequency
          fireFrequency={fireFrequency}
          handleChange={updateHost}
          disabled={numberBullets < 1}
        />
        <SpreadWidth spread={spreadWidth} handleChange={updateHost} max={360} />
      </ControlGroup>

      <ControlGroup label="Direction">
        <ShowLine showLine={showLine} handleChange={updateHost} />
        <StartingAngle
          baseAngle={baseAngle}
          handleChange={updateHost}
          disabled={rotate}
        />
        <Rotate rotate={rotate} handleChange={updateHost} />
        {rotate && <RotationSpeed speed={speed} handleChange={updateHost} />}
        <OscillateBullets oscillate={oscillate} handleChange={updateHost} />

        {oscillate && (
          <>
            <OscillationSpeed
              oscillationSpeed={oscillationSpeed}
              handleChange={updateHost}
            />
            <OscillationWidth width={width} handleChange={updateHost} />
          </>
        )}
      </ControlGroup>
    </Controls>
  );
}
