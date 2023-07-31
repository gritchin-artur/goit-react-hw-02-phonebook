// import React from 'react';
// import InputPhoneBook from './inputPhoneBook/inputPhoneBook';
// import ContactsList from './contactsList/contactsList';
// import FindContact from './findContact/findContact';
// // import { useId } from "react";

// import { nanoid } from 'nanoid';
// // model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
// import { Formik, Form } from 'formik';

// export class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   // add to input name value
//   handleChange = ({ target }) => {
//     this.setState({
//       [target.name]: target.value,
//     });
//   };

//   // add contact to arrey "contacts"
//   // createUser = data => {
//   //   const newUser = {
//   //     ...data,
//   //     id: nanoid(),
//   //   };
//   //   this.state.contacts.push(newUser);
//   //   console.log('newUser :>>', newUser);
//   // };

//   // Checke name in phonebook
//   createUser = event => {
//     const comparison = this.state.contacts.some(
//       contact =>
//         contact.name.toLowerCase().trim() === event.name.toLowerCase().trim()
//     );
//     const newUser = {
//       ...event,
//       id: nanoid(),
//     };

//     console.log(event);
//     if (comparison) {
//       alert(`${event.name} is already in contacts!`);
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [...contacts, newUser],
//       }));
//     }
//   };

//   // listener submit and cleaner inputs
//   handleSubmit = e => {
//     this.createUser(this.state);
//   };

//   // filtr contact in contacts
//   handleFilter = () => {
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };


//   render() {
//     const { filter } = this.state;
//     const addName = this.handleChange;
//     return (
//       <Formik initialValues={this.state} onSubmit={this.handleSubmit}>
//         <div>
//           <h1>Phonebook</h1>
//           <Form>
//             <InputPhoneBook
//               addName={addName}
//               // addNubber={addName}
//             />
//           </Form>
//           <div>
//             <h2>Contacts</h2>
//             <FindContact findName={addName} filter={filter} />
//             <ul>
//               <ContactsList
//                 filterContact={this.handleFilter}
//                 addContacts={this.state.contacts}
//               />
//             </ul>
//           </div>
//         </div>
//       </Formik>
//     );
//   }
// }



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


