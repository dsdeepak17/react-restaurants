import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BookmarkIcon from '../../assets/icons/bookmark.svg';
import HomeIcon from '../../assets/icons/home.svg';
import MenuIcon from '../../assets/icons/menu.svg';

const SideBarRootDiv = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(188, 188, 188, 0.25);
  min-height: calc(100vh - 20px);
`;

const SideBarInnerDiv = styled.div`
  margin: 10px 20px;
`;

const MenuText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: #465a69;
  display: grid;
  grid-template-columns: ${(props) =>
    `18px ${props.fullwidth ? 'auto' : undefined}`};
  padding: 10px;
  align-items: center;
  grid-gap: 15px;
  border-radius: 40px;
`;

const MenuItem = styled(MenuText)`
  cursor: pointer;
  background: ${(props) =>
    props.route ? 'var(--primary-color-light)' : undefined};
  &:hover {
    background: ${(props) => (props.route ? undefined : 'var(--light-color)')};
  }
`;

const MenuImage = styled.div`
  &:hover {
    border-radius: 50%;
  }
`;

const Links = [
  {
    to: '/home',
    icon: HomeIcon,
    text: 'Home',
  },
  {
    to: '/bm-restaurants',
    icon: BookmarkIcon,
    text: 'Bookmarked Restaurants',
  },
];

const SideBar = (props) => {
  return (
    <SideBarRootDiv>
      <SideBarInnerDiv>
        <MenuText fullwidth={props.fullwidth}>
          <MenuImage onClick={() => props.collapse()}>
            <img src={MenuIcon} alt="" />
          </MenuImage>
          {props.fullwidth && 'Menu'}
        </MenuText>
        {Links.map((ele, i) => (
          <Link key={i} to={ele.to} className="text-decoration-none">
            <MenuItem
              fullwidth={props.fullwidth}
              route={window.location.pathname === ele.to}
            >
              <img src={ele.icon} alt="" />
              {props.fullwidth && ele.text}
            </MenuItem>
          </Link>
        ))}
      </SideBarInnerDiv>
    </SideBarRootDiv>
  );
};

export default SideBar;
