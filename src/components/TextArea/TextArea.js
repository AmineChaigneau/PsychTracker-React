
import React from 'react';
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: 100%;
    height: 35px; 
    padding: 7px 12px 7px 12px;
    margin: 0;
    box-sizing: border-box;
    background: white;
    border: 1px solid #E8EAED;
    border-radius: 5px;
    color: black;
    box-shadow: 0 1px 3px -2px #9098A9;
    cursor: pointer;
    transition: all 150ms ease;
    resize: none;
    font-size: 15px;
    font-family: arial;
    
    &:hover {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary.main};
        box-shadow: 0 0 0 2px rgba(#0077FF,.2);
    }
`;

const TextArea = ({
    value,
    onChange,
    ...props
}) => {
    return (
        <StyledTextarea value={value} onChange={onChange} {...props}>

        </StyledTextarea>
    )
}

export default TextArea;