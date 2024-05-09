import React from 'react';
import styled from "styled-components";

const StyledRoot = styled.div`
  position: relative;
  > * {
    transition: 0.5s ease-in-out;
  }
  margin: 5px;
`;

const StyledButtonMT = styled.button`
  position: relative;
  box-sizing: border-box;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;

  border: 1px solid rgba(27, 31, 35, .15);
  background-color: ${((props) => props.bg ? '#4ABE6A' : '#C4C4C4')};
  cursor: pointer;
  display: inline-block;
  
  padding: 50px 100px;
  line-height: 20px;
  font-size: 18px;
  font-weight: 600;

  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;

  &:disabled {
    background-color: #E7E7E7;
    color: #E7E7E7;
    cursor: default;
      &:hover {
        background: #E7E7E7;
      }
  }

  &:focus {
    box-shadow: rgba(231, 231, 231, .4) 0 0 0 2px;
    outline: none;
  }

  &:hover {
    background-color: ${((props) => props.bg ? '#4FBF7E' : '#8E8C8C')};
  }

  &:active {
    background-color: ${((props) => props.bg ? '#4FBF7E' : '#ABABAB')};
    box-shadow: rgba(231, 231, 231, .4) 0 1px 0 inset;
  }
`

const ButtonMT = ({
  children,
  disabled,
  onClick,
  bg,
  id,
  ...props
}) => {
  return (
    <StyledRoot {...props}>
      <StyledButtonMT disabled={disabled} bg={bg} onClick={onClick} id={id}>
        {children}
      </StyledButtonMT>
    </StyledRoot>
  )
}

export default ButtonMT;