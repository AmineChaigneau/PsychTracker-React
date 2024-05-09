import React from 'react';
import styled from "styled-components";

const StyledLabel = styled.label`
    position: relative;
    min-width: 200px;
    font-size: 12px;
    font-style: italic;

    svg {
        position: absolute;
        right: 12px;
        top: calc(50% - 3px);
        width: 10px;
        height: 6px;
        stroke: #9098a9;
    }

    select:hover + svg {
        stroke: ${({ theme }) => theme.colors.primary.main};
    }

`

const SelectStyled = styled.select`
    -webkit-appearance: none;   
    padding: 7px 40px 7px 12px;
    width: 100%;
    height: 35px;
    background: white;
    font-size: 16px;
    border: 1px solid #E8EAED;
    border-radius: 5px;
    color: black;
    box-shadow: 0 1px 3px -2px #9098A9;
    cursor: pointer;
    transition: all 150ms ease;

    &:required:invalid {
        color: #5A667F;
    }

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary.main};
        box-shadow: 0 0 0 2px rgba(#0077FF,.2);
    }

    option {
        color: #223254;
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }

`;

const Select = ({
    label,
    children,
    ...props
}) => {
    return (
        <StyledLabel>
            {label}
            <SelectStyled {...props}>
                {children}
            </SelectStyled>
            <svg className="sprites" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" fill='none'>
                <path d="M2 1L5 5L8 1" strokeLinecap="round" strokeWidth="2"/>
            </svg>
        </StyledLabel>
    )
}

export default Select;