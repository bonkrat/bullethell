import React, { useEffect, useState } from "react";
import { Checkbox } from "../Checkbox";

export function Rotate({ host }) {
  const [rotate, setRotate] = useState(0);

  const handleChange = (e) => {
    setRotate(e.target.checked);
    host.rotate = e.target.checked;
  };

  useEffect(() => {
    host.rotate = rotate;
  }, []);

  return (
    <Checkbox label="Rotate" checked={rotate} handleChange={handleChange} />
  );
}
