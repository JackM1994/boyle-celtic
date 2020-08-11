const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateSignUpInput(data){
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name: "";
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";
    data.password = !isEmpty(data.password2) ? data.password2: "";
    data.number = !isEmpty(data.number) ? data.number: "";
    data.address = !isEmpty(data.address) ? data.address: "";
    data.emergencyName = !isEmpty(data.emergencyName) ? data.emergencyName:"";
    data.emergencyRelationship = !isEmpty(data.emergencyRelationship) ? data.emergencyRelationship:"";
    data.emergencyNumber = !isEmpty(data.emergencyNumber)  ? data.emergencyNumber: "";
    // Name checks
    if (Validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }

    //Email checks
    if (Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    } else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    // Password checks
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm password field is required";
    }
    if(!Validator.isLength(data.password, {min:6, max: 30})){
        errors.password = "Password must be at least 6 characters";
    }

    // Number checks
    if(Validator.isEmpty(data.number)){
        errors.number = "Number is required";
    }

    // Address checks
    if(Validator.isEmpty(data.address)){
        errors.address = "Address is required";
    }

    // Emergency Contact checks

    if(Validator.isEmpty(data.emergencyName)){
        errors.emergencyName = "Emergency Contact Name required";
    }

    if(Validator.isEmpty(data.emergencyRelationship)){
        errors.emergencyRelationship = "Emergency Relationship is required";
    }

    if(Validator.isEmpty(data.emergencyNumber)){
        errors.emergencyNumber = "Emergency Number required";
    }

    
    return{
        errors,
        isValid: isEmpty(errors)
    }

    
}
