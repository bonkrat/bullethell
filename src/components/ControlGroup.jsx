import React from "react";
import styled from "styled-components";

const StyledGroupChildren = styled.div`
  padding: 8px;

  & > * {
    margin-bottom: 16px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export function ControlGroup({ label, children }) {
  return (
    <div>
      <h1>{label}</h1>
      <StyledGroupChildren>{children}</StyledGroupChildren>
    </div>
  );
}
