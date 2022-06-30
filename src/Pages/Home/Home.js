import React from 'react';
import Template from '../../Components/Template';
import SpinningLoader from '../../Components/SpinningLoader/SpinningLoader';

import { RootDiv } from '../../styles/styles';

const Home = () => {
  return (
    <Template>
      <RootDiv>
        <h1>Home</h1>
        <SpinningLoader />
      </RootDiv>
    </Template>
  );
};

export default Home;
