import React from 'react';
import styled from "styled-components";

const Model = styled.div`
    z-index: 9999999;
    display: ${({open}) => (open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`;

const Container = styled.div`
  position: fixed;
  background: #fafafa;
  width: ${props => props.width};
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default function Dialog(props) {
    const {
        open,             // boolean - visible/invisible
        children,   // text
        width = '33%',
    } = {...props};

    return (
        <Model open={open}>
            <Container width={width}>
                {children}
            </Container>
        </Model>
    )
}