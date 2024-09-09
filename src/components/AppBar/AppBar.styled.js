import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  display: flex;
  position: sticky;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  background-color: #a7faea;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;