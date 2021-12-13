import React from 'react';
import PropTypes from 'prop-types';
// import styles from './ContactList.module.css';
import ContactsItem from '../ContactsItem/ContactsItem';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactsItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={() => onDeleteContact(contact.id)}
        ></ContactsItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array,
  onClick: PropTypes.func,
};

export default ContactList;
