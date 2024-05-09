import React from 'react';
import styled from "styled-components";

const StyledNumber = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 0;
  border: solid 2px #2F2F2F;
`

const Radio = styled.input`
  position: absolute;
  left: -9999px;
  &:checked + span {
		background: ${({ theme }) => theme.colors.primary.main};
	}
`

const StyledLabel = styled.label`
  display: flex;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  margin: 0;
`

const Square = ({
  children,
  value,
  onChange,
  ...props
}) => {

  return (
    <div>
      <StyledLabel>
        <Radio type='radio' value={value} onChange={onChange} name="radio" {... props}></Radio>
        <Span>{children}</Span>
      </StyledLabel>
    </div>
  )
}

const RangeNumber = ({
  max,
  onChange,
  value,
  name,
  ...props
}) => {

  function range(start = 1, end = 10) {
    const ans = [];
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
    return ans;
  }

  const arr = range(1, max)
  return (
    <StyledNumber name={name} onChange={onChange} value={value} {...props}>
      {arr.map((item, key) => {
        return (
          <div key={key}>
            <Square value={item} children={item}/>
          </div>
        )
      })}
    </StyledNumber>
  )
}

export default RangeNumber;