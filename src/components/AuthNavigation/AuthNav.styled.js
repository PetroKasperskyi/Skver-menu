import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-radius: 4px;
  padding: 12px;
  font-weight: 700;

  &.hover {
    color: green;
  }

  &.active {
    color: darkviolet;
  }
`;