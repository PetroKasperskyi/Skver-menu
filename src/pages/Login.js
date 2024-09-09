import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginContainer, LoginTitle, LoginWrapper } from './Login.styled';

export default function Login() {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>Log In</LoginTitle>
        <LoginForm />
      </LoginWrapper>
    </LoginContainer>
  );
}