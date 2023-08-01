import React from 'react';

import { nanoid } from 'nanoid';
import InputPhoneBook from './inputPhoneBook/inputPhoneBook';
import ContactsList from './contactsList/contactsList';
import FindContact from './findContact/findContact';
import { Formik } from 'formik';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  // Checke name in phonebook
  repeatControl = event => {
   let sameNsame = this.state.contacts.map(same => same.name);
    
    const newUser = {
      ...event,
      id: nanoid(),
    };

    if (sameNsame.includes(event.name)) {
      alert(`${event.name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newUser],
      }));
    }
  };

  //delete contact
  handleDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

// filter of contacts
  handleFilter = filterData => {
    this.setState({ ...this.state, filter: filterData });
  };


  filterName = name => {
   return name.filter(cur =>
      cur.name.toUpperCase().includes(this.state.filter),
    );
  };



  render() {
    const { contacts } = this.state;
    return (
      <Formik>
              <div className='appContainer'>
        <h1>Phonebook</h1>
          <InputPhoneBook
            submitChange={this.repeatControl}
          />
        <h1>Contacts</h1>
          <FindContact
            findContact={this.handleFilter}
          />
        <ContactsList
          contacts={this.filterName(contacts)}
          delete={this.handleDeleteContact}
        />
      </div>
      </Formik>

    );
  }
}


