import React from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
    display: none;
    position: absolute;
    width: max-content;
    padding: 5px;
    top: -25px;
    left: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 20px;
    background-color: blue;
    border-radius: 5px;
    color: white;
`;

const Tooltip = (props) => {
    return (
        <TooltipContainer>{props.children}</TooltipContainer>
    )
}

export default Tooltip;