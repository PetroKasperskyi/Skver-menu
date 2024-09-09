import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  LoginButton,
  LoginFormUser,
  LoginInputField,
  LoginLabel,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormUser onSubmit={handleSubmit} autoComplete="off">
      <LoginLabel>
        Email
        <LoginInputField type="email" name="email" />
      </LoginLabel>
      <LoginLabel>
        Password
        <LoginInputField type="password" name="password" />
      </LoginLabel>
      <LoginButton type="submit">Log In</LoginButton>
    </LoginFormUser>
  );
};