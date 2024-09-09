import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  RegisterButton,
  RegisterFormUser,
  RegisterInputField,
  RegisterLabel,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormUser onSubmit={handleSubmit} autoComplete="off">
      <RegisterLabel>
        Username
        <RegisterInputField type="text" name="name" />
      </RegisterLabel>
      <RegisterLabel>
        Email
        <RegisterInputField type="email" name="email" />
      </RegisterLabel>
      <RegisterLabel>
        Password
        <RegisterInputField type="password" name="password" />
      </RegisterLabel>
      <RegisterButton type="submit">Register</RegisterButton>
    </RegisterFormUser>
  );
};