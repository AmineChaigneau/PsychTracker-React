import React from 'react';
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;

    > * {
        transition: 0.3s ease-in-out;
    }
`

const StyledCheckbox = styled.input`
    opacity: 0;
    display: none;

    &:checked + div {
        transform: translate(1px, 1px);
        border-color: ${({ theme }) => theme.colors.primary.main};
    }

    &:checked + div::after {
        display: block;
        top: 1px;
        left: 5px;
        width: 25%;
        height: 60%;
        border: solid black;
        border-color: ${({ theme }) => theme.colors.primary.main};
        border-width: 0 2px 2px 0;
        animation-name: ${rotate};
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
      }
`
const Switch = styled.div`
    width: 18px;
    height: 18px;
    border: solid 2px black;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }

    &::after {
        content: "";
        position: absolute;
        display: none;
      }
`

const Checkbox = ({ ...props }) => (
    <CheckboxContainer>
        <StyledCheckbox type='checkbox' {...props}/>
        <Switch />
    </CheckboxContainer>
)

export default Checkbox;