import { useState } from "react";

export function useHost(hostInstance) {
  const [host, setHost] = useState(hostInstance);

  const updateHost = (property, value) => {
    hostInstance[property] = value;
    setHost({
      ...host,
      [`${property}`]: value,
    });
  };

  return { host, updateHost };
}
