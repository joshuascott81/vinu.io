const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';

    if (Validator.isEmpty(data.handle)) {
        errors.handle = 'Profile handle is required';
    } else if (!Validator.isLength(data.handle, {mind: 2, max: 20})) {
      errors.handle = 'Handle needs to be between 2 and 20 characters';
    }
    
    if(!isEmpty(data.youtubeUrl)) {
        if(!Validator.isURL(data.youtubeUrl)) {
            errors.youtubeUrl = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.vimeoUrl)) {
        if(!Validator.isURL(data.vimeoUrl)) {
            errors.vimeoUrl = 'Not a valid URL';
        }
    }
    if(!isEmpty(data.facebookUrl)) {
        if(!Validator.isURL(data.facebookUrl)) {
            errors.facebookUrl = 'Not a valid URL';
        }
    }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
