import { useState } from 'react';
import styled from 'styled-components';

import eyeIcon from '../../assets/icons/eye.svg';

const Box = styled.div`
  padding: 2px 7px;
  margin: 10px 0;
  width: 320px;
  height: 37px;
  color: #465a69;
  border: solid 1px #465a69;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const InputElement = styled.input`
  text-align: left;
  padding: 0px 10px;
  font-size: 16px;
  height: 22px;
  width: 100%;
  border: none;
  outline: none;
`;

const Title = styled.h1`
  color: var(--blackish-color);
  font-size: 1.1rem;
  font-weight: 300;
  width: 100px;
`;

const EyeIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  border-radius: 50%;
  cursor: pointer;
  padding: 2px;
  opacity: 0.7;
  background: ${(props) => (props.show ? 'yellowgreen' : '#d2d2d2')};
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;

const InputBox = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { name, value, label, handleChange, required, type, placeholder } =
    props;

  const showPassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Box>
        {label.length !== 0 && (
          <Title>
            {`${label}`}
            {required && <sup>*</sup>}
          </Title>
        )}
        <InputElement
          type={passwordShown ? 'text' : type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          required={required}
        />
        {type === 'password' && value && (
          <span
            onClick={() => showPassword()}
            style={{
              color: 'black',
              margin: '5px',
              borderRadius: '5px',
            }}
          >
            <EyeIcon src={eyeIcon} alt="show" show={passwordShown} />
          </span>
        )}
      </Box>
    </>
  );
};

export default InputBox;
