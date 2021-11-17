import React, { useState } from "react";
import { Slider } from "./Slider";
import styled from "styled-components";

const StyledAttributeSlider = styled.div`
  margin-bottom: 16px;
`;

const SliderOscillator = styled.div`
  padding-left: 16px;
  border-left: 1px solid black;
`;

const SliderOscillatorTitle = styled.div`
  cursor: pointer;
  margin-bottom: 8px;
`;

export function AttributeSlider({
  attributeState,
  attribute,
  handleChange,
  max,
  disabled,
}) {
  const [showOscillator, setShowOscillator] = useState(false),
    onValueChange = (e) => {
      handleChange(`${attribute}.value`, Number.parseInt(e.target.value));
    },
    onOscillateAmountChange = (e) => {
      handleChange(
        `${attribute}.oscillateAmount`,
        Number.parseInt(e.target.value)
      );
    },
    onOscillateSpeedChange = (e) => {
      handleChange(
        `${attribute}.oscillateSpeed`,
        Number.parseInt(e.target.value)
      );
    };

  return (
    <StyledAttributeSlider>
      <Slider
        label={`${attribute}`}
        handleChange={onValueChange}
        value={attributeState.value}
        min={0}
        max={max}
        disabled={disabled}
      />
      <SliderOscillatorTitle onClick={() => setShowOscillator(!showOscillator)}>
        {showOscillator ? "▾" : "▸"}Oscillator
      </SliderOscillatorTitle>
      {showOscillator && (
        <SliderOscillator>
          <Slider
            label={`${attribute} oscillate`}
            handleChange={onOscillateAmountChange}
            value={attributeState.oscillateAmount}
            min={0}
            max={100}
            disabled={disabled}
          />
          <Slider
            label={`${attribute} oscillate speed`}
            handleChange={onOscillateSpeedChange}
            value={attributeState.oscillateSpeed}
            min={0}
            max={100}
            disabled={disabled}
          />
        </SliderOscillator>
      )}
    </StyledAttributeSlider>
  );
}
