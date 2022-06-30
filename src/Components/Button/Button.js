import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  //   width: 150px;
  //   height: 50px;
  padding: 7px 15px;
  border: none;
  box-shadow: 0 0 10px 0.5px rgba(0, 0, 0, 0);
  -webkit-transition: all 1.2s linear;
  -moz-transition: all 1.2s linear;
  transition: all 1.2s linear;
  background: var(--primary-color);
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  transition: 1.2s;
  &:hover {
    box-shadow: 0 0 10px 0.5px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(0.98);
    -moz-transform: scale(0.98);
    -ms-transform: scale(0.98);
    -o-transform: scale(0.98);
    transform: scale(0.98);
    cursor: pointer;
    background: var(--primary-color)
      radial-gradient(circle, transparent 1%, var(--primary-color) 1%)
      center/15000%;
  }
  &:active {
    background-color: var(--primary-color-light);
    background-size: 100%;
    transition: background 0s;
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

const Button = (props) => {
  const { text, style, className, onClick } = props;
  return (
    <CustomButton
      style={style || {}}
      className={className || ''}
      onClick={onClick ? (e) => onClick(e) : undefined}
    >
      {text || 'Submit'}
    </CustomButton>
  );
};

export default Button;
