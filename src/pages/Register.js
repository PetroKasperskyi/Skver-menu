import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import {
  RegisterContainer,
  RegisterTitle,
  RegisterWrapper,
} from './Register.styled';

export default function Register() {
  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterTitle>Registration</RegisterTitle>
        <RegisterForm />
      </RegisterWrapper>
    </RegisterContainer>
  );
}