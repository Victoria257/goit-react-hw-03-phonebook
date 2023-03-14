import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from './FilterContacts/FilterContacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(7),
      name,
      number,
    };

    const theSameName = this.state.contacts.find(
      prevContact => prevContact.name === contact.name
    );
    if (theSameName) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const normalizeFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <Form
          onSubmit={this.formSubmitHandler}
          addContacts={this.addContacts}
          contacts={this.state.contacts}
        />
        <ContactList contacts={visibleContacts} delContact={this.delContact}>
          <FilterContacts
            filter={this.state.filter}
            onChange={this.changeFilter}
          />
        </ContactList>
      </div>
    );
  }
}

export default App;
