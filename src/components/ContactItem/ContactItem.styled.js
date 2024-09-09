import styled from 'styled-components';

export const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonDeleteContact = styled.button`
  min-width: 60px;
  background:#0a38ce;
  border: 1px solid #0c41ee;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px;
  box-sizing: border-box;
  color: #fce803;
  display: inline-block;
  outline: 0;
  padding: 3px 3px;
  margin: 10px 0px;
  text-align: center;

  &:hover,
  &:active {
    background-color: initial;
    color: #0c41ee;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const ContactItemName = styled.span`
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  color:#031242;
`;

export const ContactItemNumber = styled.span`
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
  color: #031242;
`;