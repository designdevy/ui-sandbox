import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`;

const Icon = styled.svg`
  fill: #5392f9;
  width: 12px;
  height: 12px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 1px solid;
  border-color: #ced0d4;
  border-radius: 2px;

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox className="checkbox" checked={checked}>
      <Icon className="icon" viewBox="0 0 12 12">
        <path d="M8.971 1.603l-4.38 4.38-1.562-1.561c-.39-.39-1.024-.39-1.414 0L.5 5.537C.11 5.927.11 6.56.5 6.95l3.384 3.383c.39.39 1.023.39 1.414 0L11.5 4.132c.39-.39.39-1.024 0-1.414l-1.115-1.115c-.39-.39-1.023-.39-1.414 0z" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
