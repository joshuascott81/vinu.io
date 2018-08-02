import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ProfileField from './ProfileField';
import { submitProfile } from '../../actions';

const FIELDS = [
  { formControl: 'input', label: 'Profile Handle', name: 'handle', rows: 1 },
  {
    formControl: 'input',
    label: 'Your Company or Brand',
    name: 'brand',
    rows: 1
  },
  { formControl: 'input', label: 'Your Website', name: 'website', rows: 1 },
  { formControl: 'textarea', label: 'Bio', name: 'bio', rows: '6' }
];

class ProfileForm extends Component {
  renderFields() {
    let array = [];
    FIELDS.forEach(({ formControl, label, name, rows }) => {
      array.push(
        <Field
          component={ProfileField}
          formControl={formControl}
          type="text"
          label={label}
          name={name}
          rows={rows}
          key={name}
        />
      );
    });
    return array;
  }

  render() {
    return (
      <div className="container">
        <form className="form-group" onSubmit={submitProfile}>
          {this.renderFields()}
          <button type="submit" className="btn btn-primary" method="post">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.handle) {
    errors.handle = 'You must provide a handle';
  } else if (values.handle.length <= 3) {
    errors.handle = 'Your handle must be at least four characters';
  } else if (values.handle.length >= 20) {
    errors.handle = 'Your handle must be no more than twenty characters';
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'profileForm'
})(ProfileForm);
