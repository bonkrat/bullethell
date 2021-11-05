import React from "react";
import styled from "styled-components";

const StyledGroupLabel = styled.h1`
  margin: 0 0 16px 0;
`;

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
      <StyledGroupLabel>{label}</StyledGroupLabel>
      <StyledGroupChildren>{children}</StyledGroupChildren>
    </div>
  );
}
