import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { RootDiv } from '../../styles/styles';
import SpinningLoader from '../../Components/SpinningLoader';

import Template from '../../Components/Template';
import InputBox from '../../Components/InputBox/InputBox';
import Button from '../../Components/Button/Button';

const LoginBox = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 360px;
  width: 420px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: var(--blackish-color);
  font-size: 1.5rem;
  font-weight: 650;
  margin-bottom: 50px;
`;

const Error = styled.p`
  color: var(--error-color);
  font-size: 1rem;
  font-weight: 400;
`;

const Message = styled.p`
  color: var(--blackish-color);
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
`;

const Login = (props) => {
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const signIn = async () => {
    //sign in the user
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  return (
    <Template>
      <RootDiv>
        {loading ? (
          <SpinningLoader />
        ) : (
          <LoginBox>
            <Title>Login</Title>
            <Error>{error}</Error>
            <InputBox
              type="email"
              name="email"
              value={userDetails.email}
              placeholder="Enter your Email"
              label=""
              handleChange={(e) => handleChange(e)}
              required
            />

            <InputBox
              type="password"
              name="password"
              value={userDetails.password}
              placeholder="Enter your Password"
              label=""
              handleChange={(e) => handleChange(e)}
              required
            />
            <br />
            <Button onClick={signIn} />
          </LoginBox>
        )}
      </RootDiv>
    </Template>
  );
};

export default Login;
