import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';

class App extends Component {
  state = {
    // contacts: [],

    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  addContact = e => {
    // console.log(newContact);

    // const contact = {
    //   id: shortid.generate(),
    //   name: newContact.name,
    // };
    e.preventDefault();
    this.setState({
      contacts: [
        {
          id: shortid.generate(),
          name: this.state.name,
          number: this.state.number,
        },
        ...this.state.contacts,
      ],
    });
    this.setState({ name: '', number: '' });
  };

  // addContact = newContact => {
  //   if (this.state.contacts.find(contact => contact.name === newContact.name)) {
  //     alert(newContact.name + 'is already exist in phonebook');
  //     return;
  //   }
  //   this.setState(prevState => ({
  //     contacts: [newContact, ...prevState.contacts],
  //   }));
  // };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <form onSubmit={this.addContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            value={this.state.filter}
            onChange={this.changeFilter}
          ></input>
        </label>
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}
              {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
