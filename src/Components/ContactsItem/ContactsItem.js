import React from 'react';
import PropTypes from 'prop-types';

const ContactsItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id}>
      <p>{name}:</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactsItem;
