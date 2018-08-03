import React, { Component } from 'react';
<<<<<<< HEAD

class ProfileForm extends Component {
    constructor() {
        super();
        this.state = {
            handle: "",
            brand: "",
            website: "",
            bio: ""
        }

        onChange(e) {
            this.setState({ [e.target.name]: e.target.value });
          }
    }
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="handle">Handle</label>
          <input
            type="text"
            className="form-control"
            id="handle"
            placeholder="Enter handle"
          />
        </div>
        <div className="form-group">
          <label for="brandName">Your Company or Brand</label>
          <input
            type="text"
            className="form-control"
            id="brandName"
            placeholder="Enter your company or brand name"
          />
        </div>
        <div className="form-group">
          <label for="websites">Your Website</label>
          <input
            type="text"
            className="form-control"
            id="websites"
            placeholder="Enter your website"
          />
        </div>
        <div className="form-group">
          <label for="bio">Your Company or Brand Bio</label>
          <input
            type="text"
            className="form-control"
            id="bio"
            placeholder="Enter your company or brand bio"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          action="/api/profile"
          method="post"
        >
          Submit
        </button>
      </form>
=======
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
>>>>>>> master
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = state => ({
    profile: state.profile
})

export default ProfileForm;
=======
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
>>>>>>> master
