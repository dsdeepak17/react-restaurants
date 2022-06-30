import React from 'react';
import styled from 'styled-components';
import './SpinningLoader.css';

const SpinningLoaderDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SpinningLoader() {
  return (
    <SpinningLoaderDiv>
      <div className="spinner">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </SpinningLoaderDiv>
  );
}

export default SpinningLoader;
