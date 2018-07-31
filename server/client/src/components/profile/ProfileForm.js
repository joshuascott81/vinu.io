import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class ProfileForm extends Component {
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
    );
  }
}

export default reduxForm({
  form: "profileForm"
})(ProfileForm);
