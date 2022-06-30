import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.footer`
  height: 20px;
  background: #465a69;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  width: 100vw;
`;

const Footer = () => {
  return <FooterDiv>Copyright ©2022. Powered by Deepak Singh</FooterDiv>;
};

export default Footer;
