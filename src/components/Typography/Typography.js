import React from 'react';
import styled from "styled-components";

const StyledTypography = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.text};
    margin: 10px 0px;
    text-align: left;
    line-height: 20px;

      &.h1 {
        font-size: 35px;
      }
      &.h2 {
        font-size: 30px;
      }
      &.h3 {
        font-size: 25px;
        line-height: 35px;
      }
      &.h4 {
        font-size: 20px;
        line-height: 30px;
      }
`;

const Typography = ({ children, variant, ...props }) => {
    return (
        <StyledTypography className={variant} {...props}>
            {children}
        </StyledTypography>
    )
}

export default Typography;