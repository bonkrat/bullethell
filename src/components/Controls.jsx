import React from "react";
import styled from "styled-components";

const StyledControls = styled.div`
  padding: 8px 16px;

  & > * {
    margin-bottom: 16px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;
export function Controls({ children }) {
  return <StyledControls>{children}</StyledControls>;
}
