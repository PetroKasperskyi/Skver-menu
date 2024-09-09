import { HomeContainer, HomeTitle } from './Home.styled';
import { useAuth } from 'hooks';
export default function Home() {
const {user} = useAuth();
  
  return (
    <HomeContainer>
      <HomeTitle>Welcome to PHONEBOOK {user.name}!</HomeTitle>
    </HomeContainer>
  );
}