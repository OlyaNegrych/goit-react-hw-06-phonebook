import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { DeleteBtn } from '../ContactList/ContactList.styled';
import { ContactItem } from '../ContactList/ContactList.styled';
import { getVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  }

    return (
      <ul>
        {getVisibleContacts(contacts, filter).map(({ id, name, number }) => (
          <ContactItem key={id}>
            {' '}
            {name}: {number}
            <DeleteBtn type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </DeleteBtn>
          </ContactItem>
        ))}
      </ul>
    );
  }

export default ContactList;
