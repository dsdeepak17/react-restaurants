import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Dropdown from '../DropDown';

import UserIcon from '../../assets/icons/user.svg';
import Loader from '../../assets/icons/loader.svg';

const HeaderRoot = styled.header`
  display: grid;
  grid-template-columns: ${(props) => `10fr ${props ? '4fr 1fr' : ''}`};
  justify-content: space-between;
  background-color: #fafafa;
`;

const Title = styled.h1`
  color: #303030;
  border: 1px solid #fafafa;
  font-size: 1.5rem;
  font-weight: 650;
  padding: 0.3rem 0.5rem;
  margin: 0;
  &:hover {
    border: 1px solid #000;
    padding: 0.3rem 0.5rem;
    border-radius: 0.15rem;
    color: #000;
  }
`;

const HeaderDivision = styled.div`
  padding: 20px;
  display: flex;
  grid-gap: 10px;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 17px;
`;

const VerticalBorder = styled.div`
  width: 23px;
  height: 0px;
  border: 1px solid #000000;
  transform: rotate(90deg);
`;

const HeaderEnd = styled.div`
  height: 4px;
  width: ${(props) =>
    `${props.fullwidth ? 'calc(100vw - 270px)' : 'calc(100vw - 80px)'}`};
  margin-left: ${(props) => `${props.fullwidth ? '270px' : '80px'}`};
  background: #f7f7f7;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const DropDownMainText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  color: ${(props) => props.color || '#465a69'};
`;

const DropDownInnerText = styled(DropDownMainText)`
  padding: 10px 15px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: rgba(65, 65, 91, 0.05);
  }
`;

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderRoot>
        <HeaderDivision>
          <LogoImage src={Loader} alt="logo" />
          <VerticalBorder />
          <Title>Restaurants</Title>
        </HeaderDivision>
      </HeaderRoot>
      <HeaderEnd fullwidth={props.fullwidth} />
    </>
  );
};

export default Header;
