import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  UserMenuButton,
  UserMenuText,
  UserMenuWrapper,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <UserMenuText>Welcome, {user.name}</UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButton>
    </UserMenuWrapper>
  );
};