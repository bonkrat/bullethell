import React, { useEffect, useState } from "react";
import { Checkbox } from "../Checkbox";

export function ShowLine({ host }) {
  const [showLine, setShowLine] = useState(0);

  const handleChange = (e) => {
    setShowLine(e.target.checked);
    host.showLine = e.target.checked;
  };

  useEffect(() => {
    host.showLine = showLine;
  }, []);

  return (
    <Checkbox
      label="Show Line"
      checked={showLine}
      handleChange={handleChange}
    />
  );
}
