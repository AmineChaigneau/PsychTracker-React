import React from 'react';
import styled from "styled-components";
import Radio from '../../Radio/Radio'

const Wrapper = styled.form`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SliderBar = styled.div`
    position: absolute;
    height: 2px;
    width: 100%;
    background: #2F2F2F;
    left: 0px;
    top: 32%;
    transform: translateY(-50%);
    z-index: 5;
`

const RangeSlider = ({
    max,
    onChange,
    value,
    name,
    row,
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
        <Wrapper name={name} onChange={onChange} value={value} {...props}>
            {arr.map((item, key) => {
                return (
                    <div key={key} style={{ zIndex: 10 }}>
                        <Radio value={item} label={item} row={true} />
                    </div>
                )
            })}
            <SliderBar />
        </Wrapper>
    )
}

export default RangeSlider;