const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data){
    let errors = {};

    // assign empty string to the value if it's not filled, as the Validator requires string.

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';


    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid.';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required.';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required.';
    }


    return {
        errors,
        isValidate: isEmpty(errors)
    }
}