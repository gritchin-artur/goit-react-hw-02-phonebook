import React from 'react';
import propTypes from 'prop-types';
import 'styles/shared.scss';



class ContactsList extends React.Component {

  render() {
    return (
      <ul className='contactList'>
        {this.props.contacts.map(({ name, number, id }) => (
          <li key={id} id={id}>
            {name}: {number}
            <button
              className='contactButton'
              type="submit"
              onClick={() => this.props.delete(id)}
            >Delete
            </button>
          </li>
        ))}
      </ul>

    );
  };
}
ContactsList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
id: propTypes.string.isRequired,
  })),
  delete: propTypes.func.isRequired,
};

export default ContactsList;




