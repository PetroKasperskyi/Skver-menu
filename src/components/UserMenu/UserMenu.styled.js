import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const UserMenuButton = styled.button`
  background: #0a38ce;
  border: 1px solid #0c41ee;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px;
  box-sizing: border-box;
  color: #fce803;
  display: inline-block;
  outline: 0;
  padding: 8px 12px;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: center;

  &:hover,
  &:active {
    background-color: initial;
    color: #4e0963;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const UserMenuText = styled.p`
  color: #630d70;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  margin-right: 5px;
`;