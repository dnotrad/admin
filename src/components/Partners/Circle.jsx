import React from 'react';
import styled from "styled-components";

const Circle = styled.div`
    height: 8px;
    width: 8px;
    background-color: ${props => props.color};
    opacity: ${props => props.opacity ? props.opacity : 1};
    border-radius: 50%;
`

export default Circle;