import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
`

const Span = styled.span`
    display: flex;
    flex-flow: ${((props) => props.row ? 'column' : 'row')};
    align-items: center;
    justify-content: center;
	padding: 0.375em 0.375em 0.375em 0.375em;
	border-radius: 99em; // or something higher...
	transition: 0.25s ease;
    font-size: 14px;
	&:hover {
		background-color: mix(#fff, ${({ theme }) => theme.colors.primary.main}, 84%);
	}
        &:before {
			display: flex;
			flex-shrink: 0;
			content: "";
			background-color: #fff;
			width: 1.5em;
			height: 1.5em;
			border-radius: 50%;
			margin-right: ${((props) => props.row ? '0' : '0.375em')};
			transition: 0.25s ease;
			box-shadow: inset 0 0 0 0.125em #2F2F2F;
		}
`

const CustomRadio = styled.input`
    position: absolute;
	left: -9999px;
	&:checked + span {
		background-color: mix(#fff, ${({ theme }) => theme.colors.primary.main}, 84%);
		&:before {
			box-shadow: inset 0 0 0 0.3575em ${({ theme }) => theme.colors.primary.main};
		}
	}
`

const Label = styled.label`
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin: 0;
`

const Radio = ({
    value,
    label,
    onChange,
    row,
    ...props
}) => {
    return (
        <Wrapper>
            <Label>
                <CustomRadio
                    type="radio"
                    name="radio"
                    value={value}
                    onChange={onChange} {...props} />
                <Span row={row}>{label}</Span>
            </Label>
        </Wrapper>
    )
}

export default Radio