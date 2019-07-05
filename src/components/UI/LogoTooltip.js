import React from 'react';
import Tooltip from './Tooltip';
import styled from 'styled-components';

const Logo = styled.img`
    width: ${props => props.size ? props.size : "25px"};
    margin: 10px;
`;

const LogoContainer = styled.div`
    position:relative;
    display:flex;

    &:hover div {
        display:block;
    }
`

const LogoTooltip = (props) => {
    return (
        <LogoContainer>
            <Logo src={props.src} alt={props.name} size={props.size} />
            <Tooltip>{props.name}</Tooltip>
        </LogoContainer>
    )
}

export default LogoTooltip
