import React from 'react';
import propTypes from 'prop-types';
import { Field } from 'formik';
import 'styles/shared.scss';

class FindContact extends React.Component {
  //listener of input
  filterValue = e => {
    let value = e.currentTarget.value.toUpperCase();
    this.props.findContact(value);
  };

  render() {
    return (
      <div>
        <h4>Find contacts by name</h4>
        <Field
          name='name'
          onChange={this.filterValue}
        ></Field>
      </div>
    );
  }
}

FindContact.propTypes = {
  findContact: propTypes.func.isRequired,
};
export default FindContact;