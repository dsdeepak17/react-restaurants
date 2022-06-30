import React from 'react';

import styled from 'styled-components';
import { useUI } from '../../Context/UIContext';

import Header from '../Header';
import SideBar from '../Sidebar';
import Footer from '../Footer';

const RootSeparate = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `${props.fullwidth ? '270px' : '80px'} auto `};
  grid-template-rows: 75px calc(100vh - 95px) 20px;
  transition: width 5s;
`;

const Template = (props) => {
  const { sidebarOpen, setSidebarOpen } = useUI();

  return (
    <>
      <RootSeparate fullwidth={sidebarOpen}>
        <SideBar
          fullwidth={sidebarOpen}
          collapse={() => setSidebarOpen(!sidebarOpen)}
        />
        <Header fullwidth={sidebarOpen} />
        {props.children}
        <Footer />
      </RootSeparate>
    </>
  );
};

export default Template;
