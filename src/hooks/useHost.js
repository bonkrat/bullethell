import { useState } from "react";
import set from "lodash/set";

export function useHost(hostInstance) {
  const [host, setHost] = useState(hostInstance);

  const updateHost = (property, value) => {
    set(hostInstance, property, value);
    setHost({ ...set(host, property, value) });
  };

  return { host, updateHost };
}
