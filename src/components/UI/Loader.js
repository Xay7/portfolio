import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  position: absolute;
  border: 4px solid #0673C7;
  border-radius: 50%;
  border-top: 4px solid white;
  width: 16px;
  height: 16px;
  top: 12px;
  animation: ${animation} 1s linear infinite;
`;



const Loader = () => {
    return (
        <Spinner></Spinner>
    )
}

export default Loader
