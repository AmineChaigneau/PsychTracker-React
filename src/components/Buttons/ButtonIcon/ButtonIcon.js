import React from 'react';
import styled from "styled-components";

const Icon = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 20px;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  > svg {
    height: 70px;
    width: 70px;
  }

  > img {
    height: 65px;
    width: 65px;
  }

  &:hover {
    background: #E7E7E766;
  }
`

const ButtonIcon = ({
  children,
  onClick,
  disabled,
  ...props
}) => {
  return (
      <Icon disabled={disabled} onClick={onClick} {...props}>
          {children}
      </Icon>
  )
}

export default ButtonIcon;