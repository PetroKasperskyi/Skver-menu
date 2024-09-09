import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import {
  ButtonDeleteContact,
  ContactItemName,
  ContactItemNumber,
  ItemContact
} from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ItemContact>
      <div>
        <ContactItemName>{name}:</ContactItemName>

        <ContactItemNumber> {number}</ContactItemNumber>
      </div>
      <ButtonDeleteContact
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </ButtonDeleteContact>
    </ItemContact>
  );
};