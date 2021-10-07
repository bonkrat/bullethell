import React from "react";
import styled from "styled-components";

const StyledSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledSliderInput = styled.input`
  width: 100%;
`;

export function Slider({
  label,
  handleChange,
  min = 0,
  max = 25,
  value,
  disabled,
}) {
  return (
    <StyledSliderContainer>
      {label && <label>{label}</label>}
      <StyledSlider>
        <StyledSliderInput
          onChange={handleChange}
          onMouseUp={handleChange}
          type="range"
          min={min}
          max={max}
          value={value}
          disabled={disabled}
        />
        <span>{value}</span>
      </StyledSlider>
    </StyledSliderContainer>
  );
}
