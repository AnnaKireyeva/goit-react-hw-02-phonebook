import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';

import AddContactForm from './Components/AddContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactsList/ContactList';

class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const contact = {
      id: shortid.generate(),
      name: newContact.name,
      number: newContact.number,
    };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
      )
    ) {
      alert(newContact.name + ' is already in contacts');
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div className="App">
        <h1 className="Title">Phonebook</h1>
        <AddContactForm onSubmit={this.addContact} />

        <h2 className="Title">Contacts</h2>
        <Filter value={this.state.filter} onChangeFilter={this.changeFilter} />

        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
