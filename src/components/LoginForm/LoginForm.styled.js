import styled from 'styled-components';

export const LoginFormUser = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.button`
  background: #0a38ce;
  border: 1px solid #0c41ee;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px;
  box-sizing: border-box;
  color: #fce803;
  display: inline-block;
  outline: 0;
  padding: 10px 25px;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;

  &:hover,
  &:active {
    background-color: initial;
   color:#0c41ee;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const LoginInputField = styled.input`
  border: 0;
  outline: 1px solid  #93a3d6;
  border-radius: 3px;
  min-width: 130px;
  height: 24px;
  margin: 8px;
  padding-left: 5px;
`;

export const LoginLabel = styled.label`
  display: block;
  color: #93a3d6;
  font-size: 18px;
  font-weight: 500;
`;