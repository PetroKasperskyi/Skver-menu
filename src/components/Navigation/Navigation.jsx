import { useAuth } from 'hooks';
import { AuthNavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <AuthNavLink to="/">Home</AuthNavLink>
      {isLoggedIn && <AuthNavLink to="/contacts">Contacts</AuthNavLink>}
    </nav>
  );
};