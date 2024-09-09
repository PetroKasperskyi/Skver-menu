import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from 'redux/operations';
import {
  FormAddContact,
  InputField,
  Label,
  ButtonAddContact,
  
} from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const formSubmitHandler = data => {
    contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts`)
      : dispatch(addContact({ name, number })) && formReset();
  };

  const handleSubmit = event => {
    event.preventDefault();
    formSubmitHandler({ name, number });
  };

  return (
    <FormAddContact onSubmit={handleSubmit}>
      <Label>
        Name
        <InputField
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <InputField
          type="tel"
          name="number"
          value={number}
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          required
          onChange={handleChange}
        />
      </Label>
      <ButtonAddContact type="submit">Add contact</ButtonAddContact>
    </FormAddContact>
  );
};