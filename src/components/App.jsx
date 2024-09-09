
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Phonebook } from './Phonebook/Phonebook';
import { AppText } from './App.styled';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <AppText>Refreshing user...</AppText>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      </Route>
    </Routes>
  );
};







// import React, {useEffect} from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { GlobalStyle } from './GlobalStyle';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContacts } from '../redux/operations';
// import {
//   Wrapper,
//   Container,
//   TitlePhoneBook,
//   TitleContacts,
// } from './App.styled';




// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Wrapper>
//       <Container>
//         <TitlePhoneBook>Phonebook</TitlePhoneBook>
//         <ContactForm />
//       </Container>

//       <Container>
//         <TitleContacts>Contacts</TitleContacts>
//         <Filter />
//         {isLoading && !error && <b>Request in progress...</b>}
//         <ContactList />
//         <GlobalStyle />
//       </Container>
//     </Wrapper>
//   );
// };





